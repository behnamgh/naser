import { Middleware, PathParams, Req, Required, Next } from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { AnalyticsService } from "../services/analytic-service";

@Middleware()
export class AnalyticsMiddleware {
    constructor(private analyticService: AnalyticsService) {
    }

    async use(@Req() request: any, @Next() next: Next) {
        let obj: any = {
            ipAddress: request.client._peername,
            device: request.headers["user-agent"]
        };
        if (request.ipInfo && request.ipInfo.country) {
            obj = Object.assign(obj, { ipInfo: request.ipInfo });
        }
        console.log(obj);
        await this.analyticService.addLog(obj);
        next();
    }
}