import { Temperature } from "../src/entities/Temperature"
import { __dbName__, __dbPassword__, __dbUser__, __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";


export default{
    migrations:{
        path:path.join(__dirname,"../migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
        disableForeignKeys: false
    },
    
    entities:[Temperature],
    dbName:__dbName__,
    user:__dbUser__,
    password:__dbPassword__,
    type:"postgresql",
    debug:!__prod__,
} as Parameters<typeof MikroORM.init>[0];