import { Inject, Service } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { User } from "../models/User";

@Service()
export class UsersService {
  @Inject(User)
  private model: MongooseModel<User>;

  async save(obj: any): Promise<User> {
    const doc = new this.model(obj);
    await doc.save();

    return doc;
  }

  async find(query: any): Promise<User[]> {
    const list = await this.model.find(query).exec();

    return list;
  }

  async findById(id: string): Promise<User> {
    const target = await this.model.findById(id).exec();

    return target;
  }
  async findByUsername(username: string): Promise<User> {
    const target = await this.model.findOne({ username }).exec();

    return target;
  }
}