import { BodyParams, Controller, Get, Post, Required, Put, Delete, PathParams, Req, UseAfter, QueryParams, UseAuth } from "@tsed/common";
import { PagessService } from "../services/page-service";
import { AnalyticsService } from "../services/analytic-service";
import { ConfigService } from "../services/config-service";
import { IContent } from "../types/type";
import { AnalyticsMiddleware } from "../middlewares/log-middleware";
import { IsAuthenticated } from "../middlewares/auth-middleware";

@Controller("/page")
export class UserController {
    constructor(
        private pageService: PagessService,
        private analyticsService: AnalyticsService,
        private configService: ConfigService,
    ) {
    }
    @Get("/")
    @UseAfter(AnalyticsMiddleware)
    async getPages(
    ) {
        return await this.pageService.getPages();
    }

    @Get("/read")
    @UseAuth(IsAuthenticated)
    async readPages(
    ) {
        return await this.pageService.getPages();
    }

    @Get("/readData")
    @UseAuth(IsAuthenticated, { role: "admin" })
    async readData(
        @QueryParams("mode") mode: string,
        @QueryParams("page") page: number,
        @QueryParams("pageSize") pageSize: number,
    ) {
        return this.analyticsService.readLogs(mode ? `$${mode}` : undefined, page, pageSize);
    }

    @Get("/:id")
    async getPage(
        @Required() @PathParams("id") id: string
    ) {
        return await this.pageService.getPage(id);
    }

    // @Post("/")
    // async addPage(
    //     @Required() @BodyParams("title") title: string,
    //     @Required() @BodyParams("name") name: string,
    //     @Required() @BodyParams("contents") contents: IContent[],
    //     @BodyParams("active") active: boolean
    // ) {
    //     return await this.pageService.addNewPage({ title, contents, name, active }, "5e45167bebb72d38f99515b1");
    // }
    @Put("/")
    @UseAuth(IsAuthenticated)
    async editPage(
        @Required() @BodyParams("id") id: string,
        @BodyParams("newPage") newPage: { title?: string, name?: string, active?: boolean, contents?: IContent[] }
    ) {
        return await this.pageService.editPage(id, newPage);
    }
}
