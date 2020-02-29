import { Middleware, PathParams, Req, Required, Next } from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { AnalyticsService } from "../services/analytic-service";

@Middleware()
export class AnalyticsMiddleware {
    constructor(private analyticService: AnalyticsService) {
        console.log("=================process.env");
        console.log(process.env);

    }

    async use(@Req() request: any, @Next() next: Next) {
        const now = new Date();
        const createdAt = {
            date: `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`,
            time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        };
        let obj: any = {
            ipAddress: request.client._peername,
            device: request.headers["user-agent"],
            createdAt,
            createdAtDate: now
        };
        if (request.ipInfo && request.ipInfo.country) {
            obj = Object.assign(obj, { ipInfo: request.ipInfo });
        }
        await this.analyticService.addLog(obj);
        next();
    }
}