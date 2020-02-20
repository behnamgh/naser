import { BodyParams, Controller, Get, Post, HeaderParams, Required, Put, Authenticated, Req, Res, UseBefore, UseAfter, UseAuth, Next, Delete } from "@tsed/common";
import { Page } from "../models/Page";
import { PagessService } from "../services/page-service";

@Controller("/page")
export class UserController {
    constructor(
        private pageService: PagessService
    ) {
    }
    @Get("/")
    async getPages() {
        return await this.pageService.getPages();
    }
    @Get("/template")
    async getTemplates() {
        return await this.pageService.getTemplates();
    }
    @Post("/")
    async addPage(
        @Required() @BodyParams("title") title: string
    ) {
        return await this.pageService.addNewPage({ title, contents: [{}] }, "5e4c4b88deee7142a50a21d5", "5e45167bebb72d38f99515b1");
    }
    @Post("/template")
    async addTemplate(
        @Required() @BodyParams("name") name: string
    ) {
        return await this.pageService.addNewTemplate({ name, contents: [{}], createdAt: new Date() });
    }
    @Put("/")
    async editPage(
        @Required() @BodyParams("id") id: string,
        @BodyParams("newPage") newPage: { title?: string, active?: boolean }
    ) {
        return await this.pageService.editPage(id, newPage);
    }
    @Put("/template")
    async editTemplate(
        @Required() @BodyParams("id") id: string,
        @BodyParams("newTemplate") newTemplate: { name?: string, active?: boolean }
    ) {
        return await this.pageService.editTemplate(id, newTemplate);
    }
    @Delete("/")
    async deletePage(
        @Required() @BodyParams("id") id: string
    ) {
        return await this.pageService.deletePage(id);
    }
    @Delete("/template")
    async deleteTemplate(
        @Required() @BodyParams("id") id: string
    ) {
        return await this.pageService.deleteTemplate(id);
    }
}
