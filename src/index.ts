import {MikroORM} from "@mikro-orm/core";

const main = async()=>{
    const orm = await MikroORM.init({
        dbName:'pooltemps',
        user:'pi',
        password:'dev',
        type:'postgresql' //used to see what SQL is being processed
        debug:true
    });
}

main();


console.log("Hello there");