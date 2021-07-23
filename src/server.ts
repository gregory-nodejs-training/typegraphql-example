import "reflect-metadata";
import "./database/connection";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { VideoResolver } from "./useCases/video/resolver/VideoResolver";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [VideoResolver]
    });

    const server = new ApolloServer({ schema });

    server.listen({ port: 4100 }, console.log("Server is running!"));
}

bootstrap();