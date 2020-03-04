import { Property, Required, IgnoreProperty } from "@tsed/common";
import { Description } from "@tsed/swagger";
import { Model, Ref, ObjectID } from "@tsed/mongoose";
// import { Template } from "./Template";
import { User } from "./User";
import { IContent } from "../types/type";
@Model()
export class Page {

    @ObjectID("id")
    _id: string;

    @Property()
    @Required()
    name: string;


    @Property()
    @Required()
    title: string;

    // @Ref(Template)
    // @Description("Template ID")
    // templateId: Ref<Template>;

    @Property()
    @Required()
    contents: IContent[];

    @Property()
    @Required()
    order: number;

    @Property()
    @Required()
    @Description("activation status")
    active: Boolean = false;

    @Property()
    @Description("Creation's date")
    createdAt: Date = new Date();

}