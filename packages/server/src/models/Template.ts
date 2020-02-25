import { Property, Required } from "@tsed/common";
import { Description } from "@tsed/swagger";

import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class Template {

    @ObjectID("templateId")
    _id: string;

    @Property()
    @Required()
    name: string;

    @Property()
    @Required()
    content: object[];

    @Property()
    @Description("activation status")
    active: Boolean = false;

    @Property()
    @Required()
    @Description("Creation's date")
    createdAt: Date = new Date();

}