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

    async readLogs(): Promise<ViewLog[]> {
        // const result = await this.analyticModel.find();
        const result = await this.analyticModel.aggregate([ {
            $group: {
                _id: { ipAddress: "$ipAddress.address" },
                count: { $sum: 1 }
            },
        }]);
        // const result = await this.analyticModel.aggregate([{
        //     $group: {
        //         _id: "$device",
        //         count: { $sum: 1 }
        //     },
        // }]);

        return result;
    }
}