import { Middleware, PathParams, Req, Required, Next } from "@tsed/common";
import { NotFound } from "ts-httpexceptions";
import { AnalyticsService } from "../services/analytic-service";

@Middleware()
export class AnalyticsMiddleware {
    constructor(private analyticService: AnalyticsService) { }

    async use(@Req() request: any, @Next() next: Next) {
        const now = new Date();
        const createdAt = {
            date: `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}`,
            time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        };
        let obj: any = {
            ip: request.headers["x-forwarded-for"] || request.client._peername.address,
            headers: request.headers,
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
// Mozilla/<version> (<system-information>) <platform> (<platform-details>) 
// <extensions>

const findBrowser = (userAgent): string => {
    if (userAgent.includes("Chrome")) {
        return "Chrome";
    } else if (userAgent.includes("")) {
        return "";
    } else if (userAgent.includes("")) {
        return "";
    } else if (userAgent.includes("")) {
        return "";
    } else if (userAgent.includes("")) {
        return "";
    } else if (userAgent.includes("")) {
        return "";
    }
};

const findOS = (userAgent): string => {
    const regExp = /\(([^)]+)\)/;
    const matches = regExp.exec(userAgent);

    return matches[1];
};
// User-Agent: Mozilla/<version> (<system-information>) <platform> (<platform-details>) <extensions>
// let browsers = [
//     `Mozilla/5.0 (iPhone; CPU iPhone OS 11_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1`,
//     `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36`,
//     `Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.3`,
//     `Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/43.4`
// ]