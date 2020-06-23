import { BodyParams, Controller, Get, Post, Required, Put, Delete, PathParams, Req, UseAfter, QueryParams, UseAuth } from "@tsed/common";
import { ConfigService } from "../services/config-service";
import { IContent } from "../types/type";
import { AnalyticsMiddleware } from "../middlewares/log-middleware";
import { IsAuthenticated } from "../middlewares/auth-middleware";

@Controller("/config")
export class ConfigController {
    constructor(
        private configService: ConfigService,
    ) {
    }

    @Get("/readLangs")
    async getLangs() {
        return await this.configService.readConfigByName("lang");
    }
    @Get("/addLangs")
    async addLangs() {
        return await this.configService.createConfig();
    }
}
