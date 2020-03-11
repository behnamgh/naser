import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Page } from "../models/Page";
import initialPages from "./initialPages";

@Service()
export class PagessService {
    constructor(@Inject(Page) private pageModel: MongooseModel<Page>) {
        this.pageModel.find().count().then(pagesCount => {
            if (pagesCount < 6) {
                this.pageModel.deleteMany({}).exec();
                this.pageModel.insertMany(initialPages);
            }
        });

    }

    async delay() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }
    async addNewPage(obj: any, userId: string): Promise<Page> {
        const doc = new this.pageModel({ ...obj, userId, values: {} });
        await doc.save();

        return doc;
    }

    async getPages(name: string): Promise<Page[]> {
        const doc = this.pageModel.find(name ? { name } : {}).sort({ order: 1 });

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