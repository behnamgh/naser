import { BodyParams, Controller, Get, Post, Required, Put, Delete, PathParams, HeaderParams, Req, Session, UseBefore } from "@tsed/common";
import { PagessService } from "../services/page-service";
import { IContent } from "../types/type";
import { CreateRequestSessionMiddleware } from "../middlewares/redis-middle";

@Controller("/page")
export class UserController {
    constructor(
        private pageService: PagessService
    ) {
    }
    @Get("/")
    async getPages(
    ) {
        return await this.pageService.getPages();
    }
    @Get("/getData")
    @UseBefore(CreateRequestSessionMiddleware)
    async getData(
        @Session("count") count: any
    ) {
        console.log(["count", count]);

        return {
            ok: count
        };
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
