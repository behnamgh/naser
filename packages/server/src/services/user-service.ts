import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { User } from "../models/User";

@Service()
export class UsersService {
  @Inject(User)
  private userModel: MongooseModel<User>;

  async save(obj: any): Promise<User> {
    const doc = new this.userModel(obj);
    await doc.save();

    return doc;
  }

  async readSubscriber(page = 0, pageSize = 20): Promise<any> {
    const data = await this.userModel.find({ role: "subscriber" }).skip((page) * pageSize).limit(pageSize);
    const totalCount = await this.userModel.count({ role: "subscriber" });

    return { totalCount, pageSize, data, page };
  }

  async findById(id: string): Promise<User> {
    const target = await this.userModel.findById(id).exec();

    return target;
  }
  async findByUsername(username: string): Promise<User> {
    const target = await this.userModel.findOne({ username, password: { $exists: true } }).exec();

    return target;
  }
}