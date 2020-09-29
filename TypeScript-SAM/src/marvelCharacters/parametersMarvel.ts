import { Configuration,ConfigurationParameters } from "./configuration";
import * as crypto from "crypto-js";



export class ParametersMarvel  {
    
    query:any

    constructor() {

        var privateKey:string = 'your privateKey' 
        var apiKey:string = 'your publicKey'               

        var now = Date.now().toString()

        var hashCalculado:string = crypto.MD5(now + privateKey + apiKey).toString()

        this.query = {

            ts : now,
            hash : hashCalculado,
            apikey : apiKey
        }        

    }

}

