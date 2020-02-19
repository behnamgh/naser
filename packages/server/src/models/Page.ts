import { Property, Required, IgnoreProperty } from "@tsed/common";
import { Description } from "@tsed/swagger";
import { Model, Ref, ObjectID } from "@tsed/mongoose";
import { Template } from "./Template";
import { User } from "./User";

@Model()
export class Page {

    @ObjectID("id")
    _id: string;

    @Property()
    @Required()
    title: string;

    @Ref(Template)
    @Description("Template ID")
    templateId: Ref<Template>;

    @Property()
    @Required()
    contents: object[];


    @Ref(User)
    @Description("User ID")
    userId: Ref<User>;


    @Property()
    @Required()
    @Description("activation status")
    active: Boolean = false;

    @Property()
    @Description("Creation's date")
    createdAt: Date = new Date();

}