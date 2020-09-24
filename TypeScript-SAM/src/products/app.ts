import "source-map-support/register";
import { 
    APIGatewayProxyEvent, 
    APIGatewayProxyResult 
  } from "aws-lambda";
import { Product, ProductApi } from "./api";
import globalAxios, { AxiosPromise, AxiosInstance, AxiosResponse } from 'axios';

  
export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
        // const queries = JSON.stringify(event.queryStringParameters);
        
        const path: string = 'https://gzqz2wr7xg.execute-api.us-east-1.amazonaws.com/dev'

        let p: Promise<AxiosResponse<Product[]>> = new ProductApi({
                                                        basePath: path}).findProductsByStatus()
        
        let resultado                                                        
        
        let produtos = p.then((res)=>{
                              resultado =  {
                                              statusCode: 200,
                                              body: JSON.stringify(res.data)
                                            }                          
                              }).catch((err)=>{
                                  resultado =  {
                                                 statusCode: 404,
                                                  body: err
                                                }
                              })

        await produtos
        return await resultado                
  }


