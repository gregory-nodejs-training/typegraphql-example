import { getModelForClass } from "@typegoose/typegoose";
import { Video } from "../model/Video";

const videoModel = getModelForClass(Video, {
        schemaOptions: {
            toJSON: {
                virtuals: true
            }
        }
    }
);

export default videoModel;