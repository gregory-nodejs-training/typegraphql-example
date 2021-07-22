import mongoose, { mongo } from "mongoose";
import { MONGODB_DATABASE, MONGODB_PASSWORD } from "../config";

mongoose.connect(
    `mongodb+srv://greggfeijon:${MONGODB_PASSWORD}@testingcluster.upqgg.mongodb.net/${MONGODB_DATABASE}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);