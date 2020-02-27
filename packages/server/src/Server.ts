import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings } from "@tsed/common";
import "@tsed/swagger";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as path from "path";
import * as cors from "cors";
import * as expressip from "express-ip";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import { redis } from "./redis";

import "./providers/PassportJWTService";

const rootDir = __dirname;
const clientDir = path.join(rootDir, "../../client/build");
const redisStore = connectRedis(session);

@ServerSettings({
  mongoose: {
    url: process.env.NODE_ENV === "production" ? process.env.MONGODB_URI : "mongodb://127.0.0.1:27017/example-mongoose"
  },
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8081,
  httpsPort: false,
  logger: {
    debug: true,
    logRequest: false,
    requestFields: ["reqId", "method", "url", "headers", "query", "params", "duration"]
  },
  // mount: {
  //   "/rest": [
  //     `${rootDir}/controllers/**/*.ts` // Automatic Import, /!\ doesn't works with webpack/jest, use  require.context() or manual import instead
  //   ]
  // },
  swagger: [
    {
      path: "/api-docs"
    }
  ],
  statics: {
    "/": clientDir
  }
})
export class Server extends ServerLoader {

  constructor(settings) {
    super(settings);
  }

  /**
   * This method let you configure the middleware required by your application to works.
   * @returns {Server}
   */
  $beforeRoutesInit(): void | Promise<any> {
    this
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({
        extended: true
      }))
      .use(cors({ origin: true, credentials: true }))
      .use(expressip().getIpInfoMiddleware)
      .use(session({
        store: new redisStore({
          client: redis as any
        }),
        // name: "qid",
        secret: "aslkdfjoiq12312",
        resave: true,
        saveUninitialized: true,
        cookie: {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          // secure: true,
          maxAge: 1000 * 60 // 7 years
        }
      }));

  }

  $afterRoutesInit() {
    this.expressApp.get(`*`, (req, res) => {
      res.sendFile(path.join(clientDir, "index.html"));
    });
  }
}
