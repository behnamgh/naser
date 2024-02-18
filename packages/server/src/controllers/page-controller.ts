import {
  BodyParams,
  Controller,
  Get,
  Post,
  Required,
  Put,
  Delete,
  PathParams,
  Req,
  UseAfter,
  QueryParams,
  UseAuth,
} from "@tsed/common";
import { PagesService } from "../services/page-service";
import { AnalyticsService } from "../services/analytic-service";
import { ConfigService } from "../services/config-service";
import { IContent } from "../types/type";
import { AnalyticsMiddleware } from "../middlewares/log-middleware";
import { IsAuthenticated } from "../middlewares/auth-middleware";

@Controller("/page")
export class UserController {
  constructor(
    private pageService: PagesService,
    private analyticsService: AnalyticsService
  ) {}
  @Get("/")
  @UseAfter(AnalyticsMiddleware)
  async getPages() {
    return await this.pageService.getPages();
  }

  @Get("/read")
  @UseAuth(IsAuthenticated)
  async readPages() {
    return await this.pageService.getPages();
  }

  @Get("/readData")
  @UseAuth(IsAuthenticated, { role: "admin" })
  async readData(
    @QueryParams("mode") mode: string,
    @QueryParams("page") page: number,
    @QueryParams("pageSize") pageSize: number,
    @QueryParams("filters") filters: string
  ) {
    return this.analyticsService.readLogs(
      mode ? `$${mode}` : undefined,
      page,
      pageSize,
      filters ? JSON.parse(filters) : undefined
    );
  }

  @Get("/:id")
  async getPage(@Required() @PathParams("id") id: string) {
    return await this.pageService.getPage(id);
  }

  @Post("/")
  @UseAuth(IsAuthenticated, { role: "admin" })
  async addPage(
    @Required() @BodyParams("title") title: string,
    @Required() @BodyParams("name") name: string,
    @Required() @BodyParams("contents") contents: IContent[],
    @Required() @BodyParams("order") order: number,
    @BodyParams("active") active: boolean
  ) {
    return await this.pageService.addNewPage(
      { title, contents, name, active, order },
      "65d09dc9f29cd907f80bf9bf"
    );
  }
  @Put("/")
  @UseAuth(IsAuthenticated, { role: "admin" })
  async editPage(
    @Required() @BodyParams("id") id: string,
    @BodyParams("newPage")
    newPage: {
      title?: string;
      name?: string;
      active?: boolean;
      contents?: IContent[];
    }
  ) {
    return await this.pageService.editPage(id, newPage);
  }
}
