import { Middleware, Req, Next, Err } from "@tsed/common";
import { BadRequest } from "ts-httpexceptions";


@Middleware()
export class CreateRequestSessionMiddleware {
    use(@Next() next: Next, @Req() request: any) {
        console.log(["ipInfo", request["ipInfo"]]);
        // if (!request.session.count) {
        //     request.session.count = 0;
        // }
        // ++request.session.count;
        // if (request.session.count === 32) {
        //     throw (new BadRequest("Not a number"));
        // }

        next();
    }
}