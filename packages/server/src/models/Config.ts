import { Property, Required } from "@tsed/common";
import { Description } from "@tsed/swagger";

import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class Config {

  @ObjectID("id")
  _id: string;

  @Property()
  @Required()
  name: string;

  @Property()
  @Required()
  options: string[];

  @Property()
  // @Required()
  @Description("Creation's date")
  createdAt: Date = new Date();

}