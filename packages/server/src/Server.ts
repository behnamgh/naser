import {
  GlobalAcceptMimesMiddleware,
  ServerLoader,
  ServerSettings,
} from "@tsed/common";
import "@tsed/swagger";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as path from "path";
import * as cors from "cors";
import * as expressip from "express-ip";
// import * as session from "express-session";
// import * as connectRedis from "connect-redis";
// import { redis } from "./redis";

import "./providers/PassportJWTService";

const rootDir = __dirname;
const assetsDir = path.join(rootDir, "assets");
const clientDir = path.join(rootDir, "../../client/build");
const dashboardDir = path.join(rootDir, "../../dashboard/build");
const presskitDir = path.join(rootDir, "../../presskit/build");
// const redisStore = connectRedis(session);

@ServerSettings({
  mongoose: {
    url: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/naser",
  },
  rootDir,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8081,
  httpsPort: false,
  logger: {
    debug: true,
    logRequest: false,
    requestFields: [
      "reqId",
      "method",
      "url",
      "headers",
      "query",
      "params",
      "duration",
    ],
  },
  mount: {
    "/": [`${rootDir}/controllers/*.ts`],
  },
  swagger: [
    {
      path: "/api-docs",
    },
  ],
  statics: {
    "/": [clientDir, dashboardDir, presskitDir],
  },
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
    this.use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      )
      .use(cors({ origin: true, credentials: true }))
      .use(expressip().getIpInfoMiddleware);
  }

  $afterRoutesInit() {
    this.expressApp.get([`/admin`, `/admin/**`], (req, res) => {
      res.sendFile(path.join(dashboardDir, "index.html"));
    });

    this.expressApp.get(`/assets/:file`, (req, res) => {
      res.sendFile(path.join(assetsDir, req.params.file));
    });

    this.expressApp.get([`/press`, `/press/**`], (req, res) => {
      res.sendFile(path.join(presskitDir, "index.html"));
    });

    this.expressApp.get(`/download/:file`, (req, res) => {
      res.redirect(`${process.env.BUCKET_URL}/${req.params.file}`);
    });

    this.expressApp.get(`*`, (req, res) => {
      res.sendFile(path.join(clientDir, "index.html"));
    });
  }
}
