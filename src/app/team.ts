import { Member } from "./member";

export class Team {
    id!:Number;
    name!:String;
    capitain!:String;
    members!:Array<Member>;
    constructor(){
        //Initialisation
    }
}
