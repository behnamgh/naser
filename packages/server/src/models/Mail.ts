import { Property, Required } from "@tsed/common";
import { Description } from "@tsed/swagger";

import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class Mail {

    @ObjectID("id")
    _id: string;

    @Property()
    @Required()
    html: string;

    @Property()
    @Required()
    subject: string;

    @Property()
    @Required()
    accepted: string[];

    @Property()
    @Required()
    rejected: string[];

    @Property()
    createdBy: string;


    @Property()
    // @Required()
    @Description("Creation's date")
    createdAt: Date = new Date();

}