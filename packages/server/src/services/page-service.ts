import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Page } from "../models/Page";
import { Template } from "../models/Template";

@Service()
export class PagessService {
    constructor(@Inject(Page) private pageModel: MongooseModel<Page>, @Inject(Template) private templateModel: MongooseModel<Template>) {

    }


    async addNewPage(obj: any, templateId: string, userId: string): Promise<Page> {
        const temp = await this.templateModel.findOne({ _id: templateId });
        console.log(["temo", temp]);
        if (!temp) {
            throw new Error("template id not found");
        }
        const doc = new this.pageModel({ ...obj, templateId: temp._id, userId });
        await doc.save();

        return doc;
    }

    async addNewTemplate(obj: any): Promise<Template> {
        const doc = new this.templateModel(obj);
        await doc.save();

        return doc;
    }
    async getPages(): Promise<Page[]> {
        const doc = this.pageModel.find({}).populate(["templateId", "userId"]);

        return doc;
    }

    async getTemplates(): Promise<Template[]> {
        return this.templateModel.find({});

    }

    async editPage(id, obj: any): Promise<Page> {
        return this.pageModel.updateOne({ _id: id }, { $set: obj });
    }

    async editTemplate(id, obj: any): Promise<Template> {
        return this.templateModel.updateOne({ _id: id }, { $set: obj });
    }
    async deletePage(id): Promise<Page> {
        return this.pageModel.findByIdAndRemove(id);
    }

    async deleteTemplate(id): Promise<Template> {
        return this.templateModel.findByIdAndRemove(id);
    }
}