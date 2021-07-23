import { Field, InputType } from "type-graphql";

@InputType()
class VideoInput {
    @Field()
    description!: string;
    
    @Field()
    title!: string;
    
    @Field()
    category!: string;
}

export { VideoInput };