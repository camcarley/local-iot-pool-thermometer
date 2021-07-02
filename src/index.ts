import 'reflect-metadata';
import { MikroORM } from "@mikro-orm/core";
import { buildSchema } from 'type-graphql';
import { ApolloServer } from "apollo-server-express";

//*MikroOrm Config settings */
import express from "express";
import microConfig from "./mikro-orm.config";
import { Temperature } from "../src/entities/Temperature"
import { TemperatureResolver } from "./resolvers/Temperature";

const main = async()=>{
    const orm = await MikroORM.init(microConfig)
    await orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers:[TemperatureResolver],
            validate:false,

        }),
        context:() =>({em: orm.em})
    });


    app.listen(4000,()=>{
        console.log('Listening on localhost:4000!')
    })

    apolloServer.applyMiddleware({app});

}




main().catch((err)=>{
    console.error(err);
});