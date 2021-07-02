import { Temperature } from "../entities/Temperature";
import { MyContext } from "src/types";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";

@Resolver()
export class TemperatureResolver{
    @Query(()=> [Temperature])
    Temperatures(@Ctx() {em}:MyContext) : Promise<Temperature[]>
    {    
        return em.find(Temperature,{});
    }


    @Query(()=> Temperature,{nullable:true})
    Temperature(@Arg('id',()=>Int) id:number,@Ctx() {em}:MyContext) : Promise<Temperature | null>
    {    
        return em.findOne(Temperature,{id});
    }
}