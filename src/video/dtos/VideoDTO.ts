import { Field, InputType } from "type-graphql";

@InputType()
class VideoInput {
    @Field()
    description?: String;
    
    @Field()
    title?: String;
    
    @Field()
    category?: String;
}

export { VideoInput };