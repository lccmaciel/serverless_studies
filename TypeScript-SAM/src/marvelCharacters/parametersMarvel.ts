import { Configuration,ConfigurationParameters } from "./configuration";
import * as crypto from "crypto-js";



export class ParametersMarvel  {
    
    query:any

    constructor() {

        var privateKey:string = '3dabb9c6d5c8ecd4438f1a61e32019a22b9bbaf3' 
        var apiKey:string = '28c886410b95683b349e8b5448a04e95'               

        var now = Date.now().toString()

        var hashCalculado:string = crypto.MD5(now + privateKey + apiKey).toString()

        this.query = {

            ts : now,
            hash : hashCalculado,
            apikey : apiKey
        }        

    }

}

