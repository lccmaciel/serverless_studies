import "source-map-support/register";
import { 
    APIGatewayProxyEvent, 
    APIGatewayProxyResult 
  } from "aws-lambda";
import { CharacterDataContainer, CharacterDataWrapper, CharacterList, PublicApi } from "./api";
import globalAxios, { AxiosPromise, AxiosInstance, AxiosResponse } from 'axios';
import { Configuration } from "./configuration";
import { ParametersMarvel } from "./ParametersMarvel";

interface Parameters extends APIGatewayProxyEvent {
    characterId: number;
}



export const lambdaHandler = async (event: Parameters): Promise<APIGatewayProxyResult> => {           

        const confMarvel: ParametersMarvel  = new ParametersMarvel()        

        const path: string = 'https://gateway.marvel.com'

        var apiCall : Promise<AxiosResponse<CharacterDataWrapper>> = new PublicApi(null, path).getCharacterIndividual(event.characterId,confMarvel);    
    
        var result                                                        
        
        var characteres = apiCall.then((res)=>{

                              result =  {
                                statusCode: 200,                                              
                                body: ""
                              }                                  
          
                              //constroi o retorno...
                              if(res.data.data.results.length>0){

                                var superHero = {
                                    nome: res.data.data.results[0].name,
                                    descricao: res.data.data.results[0].description
                                }

                                result.body = JSON.stringify(superHero)

                              }
                              else{
                            
                                result.body = "Heroi nao encontrado"    

                              }


                              }).catch((err)=>{
                                  result =  {
                                                 statusCode: 404,
                                                  body: err
                                                }
                              })

        await characteres        
        return await result                
   }




