import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";


@ObjectType()
@Entity()
export class Temperature{


    @PrimaryKey()
    @Field(()=>Int)
    private _id:number;

    @Field(()=>Int)
    @Property({type:'number'})
    private _celsius:number;

    @Field(()=>Int)
    @Property({type:'number'})
    private _farenheit:number;

    @Field(()=>String)
    @Property({type:'date'})
    private _recordedAt:Date;

    @Field(()=>String)
    @Property({type:'date',onUpdate: ()=> new Date()})
    private _updatedAt:Date;



    constructor(c:number){
        this._celsius = c;
        this._farenheit = this.calculateFarenheitFromCelsius(c);
        this._recordedAt = new Date();
    }

    private calculateFarenheitFromCelsius(celiusTemperature:number):number{
        return (celiusTemperature * 1.8) + 32;
    }    

}