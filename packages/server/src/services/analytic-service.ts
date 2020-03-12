import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { ViewLog } from "../models/ViewLog";

@Service()
export class AnalyticsService {
    constructor(@Inject(ViewLog) private analyticModel: MongooseModel<ViewLog>) {
    }


    async addLog(obj: ViewLog): Promise<ViewLog> {
        const doc = new this.analyticModel(obj);
        await doc.save();

        return doc;
    }

    async readLogs(group?: any, page = 0, pageSize = 20): Promise<{ page: number, totalCount: number, pageSize: number, data: any }> {
        const data = await (group ? this.analyticModel.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAtDate" } },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { _id: -1 }
            }
        ]).skip((page) * pageSize).limit(pageSize) : this.analyticModel.find().skip((page) * pageSize).limit(pageSize));
        const totalCount = group ? 0 : await this.analyticModel.count({});

        return { totalCount, pageSize, data, page };
    }
}