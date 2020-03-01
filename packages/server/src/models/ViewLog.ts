import { Property, Required } from "@tsed/common";
import { Description } from "@tsed/swagger";

import { Model, ObjectID } from "@tsed/mongoose";

@Model()
export class ViewLog {

    @ObjectID("id")
    _id: string;

    @Property()
    ipInfo: object;

    @Property()
    @Required()
    ip: string;

    @Property()
    @Required()
    headers: object;

    @Property()
    @Required()
    device: string;

    @Property()
    @Required()
    @Description("Creation's date")
    createdAt: { date: string, time: string };

    @Property()
    @Required()
    @Description("Creation's date")
    createdAtDate: Date = new Date();

}