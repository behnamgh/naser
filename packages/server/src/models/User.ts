import {Property, Required} from "@tsed/common";

export class User {
  @Property()
  id: string;

  @Required()
  username: string;

  @Property()
  password: string;
}
