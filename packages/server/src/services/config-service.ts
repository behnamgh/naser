import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Config } from "../models/Config";

@Service()
export class ConfigService {
    @Inject(Config)
    private configModel: MongooseModel<Config>;

    async createConfig(): Promise<any> {

        const doc = new this.configModel({ name: "lang", options: ["en", "en-US", "de"] });
        await doc.save();

        return doc;
    }
    async readConfigByName(name: string): Promise<any> {
        const data = await this.configModel.findOne({ name });

        return { data };
    }
}