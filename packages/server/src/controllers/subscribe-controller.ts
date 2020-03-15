import { BodyParams, Controller, Get, Post, HeaderParams, Required, Put, Authenticated, Req, Res, UseBefore, UseAfter, UseAuth, Next, QueryParams } from "@tsed/common";
import { MailService } from "../services/mail-service";


@Controller("/subscribe")
export class UserController {
    constructor(
        private mailService: MailService
    ) {
    }
    @Post("/")
    async sendMail(
        @BodyParams("html") html: string,
        @BodyParams("subject") subject: string
    ) {
        return await this.mailService.sendMail(subject, html);
    }
    @Get("/")
    async readMail(
        @QueryParams("page") page: number,
        @QueryParams("pageSize") pageSize: number,
    ) {
        return await this.mailService.readMail(page, pageSize);
    }
}
