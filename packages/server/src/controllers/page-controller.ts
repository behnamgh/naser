import { BodyParams, Controller, Get, Post, Required, Put, Delete, PathParams, Req, UseAfter, QueryParams } from "@tsed/common";
import { PagessService } from "../services/page-service";
import { AnalyticsService } from "../services/analytic-service";
import { IContent } from "../types/type";
import { AnalyticsMiddleware } from "../middlewares/log-middleware";

@Controller("/page")
export class UserController {
    constructor(
        private pageService: PagessService,
        private analyticsService: AnalyticsService
    ) {
    }
    @Get("/")
    async getPages(
        @QueryParams("page") page: string
    ) {
        return await this.pageService.getPages(page);
    }

    @Get("/getData")
    @UseAfter(AnalyticsMiddleware)
    async getData(
        @Req() request: any
    ) {
        return request["ipInfo"];
    }
    @Get("/readData")
    async readData(
        @QueryParams("mode") mode: string
    ) {
        return await this.analyticsService.readLogs(mode ? `$${mode}` : undefined);
    }

    @Get("/:id")
    async getPage(
        @Required() @PathParams("id") id: string
    ) {
        return await this.pageService.getPage(id);
    }

    @Post("/")
    async addPage(
        @Required() @BodyParams("title") title: string,
        @Required() @BodyParams("name") name: string,
        @Required() @BodyParams("contents") contents: IContent[],
        @BodyParams("active") active: boolean
    ) {
        return await this.pageService.addNewPage({ title, contents, name, active }, "5e45167bebb72d38f99515b1");
    }
    @Put("/")
    async editPage(
        @Required() @BodyParams("id") id: string,
        @BodyParams("newPage") newPage: { title?: string, name?: string, active?: boolean, contents?: IContent[] }
    ) {
        return await this.pageService.editPage(id, newPage);
    }
    @Delete("/")
    async deletePage(
        @Required() @BodyParams("id") id: string
    ) {
        return await this.pageService.deletePage(id);
    }
}
