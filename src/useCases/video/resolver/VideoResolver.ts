import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { VideoInput } from "../dtos/VideoInput";
import { Video } from "../model/Video";
import VideoSchema from "../schema/VideoSchema";

@Resolver()
class VideoResolver {

    @Mutation(() => Video)
    async addVideo(
        @Arg("videoInput") videoInput: VideoInput) : Promise<Video> {
        const video = await VideoSchema.create(videoInput);
        return video;
    }

    @Query(() => [Video])
    async videos() : Promise<Video[]> {
        const videos = await VideoSchema.find();
        return videos;
    }
}

export { VideoResolver };