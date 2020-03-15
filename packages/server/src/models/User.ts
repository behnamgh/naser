import { Property, Required } from "@tsed/common";
import { Description } from "@tsed/swagger";

import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class User {

  @ObjectID("id")
  _id: string;

  @Property()
  @Required()
  username: string;

  @Property()
  password: string;

  @Property()
  @Required()
  role: "user" | "admin" | "subscriber";


  @Property()
  // @Required()
  @Description("Creation's date")
  createdAt: Date = new Date();

}