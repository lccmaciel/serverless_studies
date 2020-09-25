![Image of SAN](https://d1.awsstatic.com/Developer%20Marketing/serverless-web-app/sam-squirrel2.a3ff469c4f07dff6e8843cd62a92f3f02639ada4.png) 

# AWS Lambda Sample using SAM, TypeScript and openapi-generator

In this litle study I generated an alternative to the study of [Marcos Godinho](https://github.com/mvsgodinho/aws-studies/blob/master/lambda-node-sls-sample/README.md), using SAM, TypeScript and Openapi-generator.

## Objectives

1. To use [AWS SAM](https://aws.amazon.com/serverless/sam/?nc1=h_ls) instead of [Serveless Framework](https://www.serverless.com/blog/serverless-express-rest-api#converting-an-existing-express-application). The reasons are:
    - Just CloudFormation as a script to deploy;
    - Totally free;
    - Like Serverless, it allows local environment for testing quickly.
    
2. To use TypeScript as a development language because it is a techonology already used by the team and enable errors identification more quickly

3. To use, like Marcos study, the Openapi Generator tool, however generating a client with axios.


## Prerequisites

- [SAM-CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-windows.html)




