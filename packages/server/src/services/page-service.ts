import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Page } from "../models/Page";

@Service()
export class PagessService {
    constructor(@Inject(Page) private pageModel: MongooseModel<Page>) {
    }


    async addNewPage(obj: any, userId: string): Promise<Page> {
        const doc = new this.pageModel({ ...obj, userId, values: {} });
        await doc.save();

        return doc;
    }

    async getPages(): Promise<Page[]> {
        const doc = this.pageModel.find({}).populate(["userId"]);

        return doc;
    }

    async getPage(id: any): Promise<Page> {
        const doc = this.pageModel.findById(id);

        return doc;
    }

    async editPage(id, obj: any): Promise<Page> {
        return this.pageModel.updateOne({ _id: id }, { $set: obj });
    }

    async deletePage(id): Promise<Page> {
        return this.pageModel.findByIdAndRemove(id);
    }

}