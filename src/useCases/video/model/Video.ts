import { prop } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { v4 as uuid } from "uuid";

@ObjectType()
class Video {

    @Field({ name: "id" })
    @prop({ required: true, default: uuid() })
    readonly _id?: string;

    @Field()
    @prop({ required: true })
    description!: string;

    @Field()
    @prop({ required: true })
    title!: string;

    @Field()
    @prop({ required: true })
    category!: string;

    constructor() {
        if (!this._id) {
            this._id = uuid();
        }
    }
}

export { Video };