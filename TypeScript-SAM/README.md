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

In this study I have used the Marvel APIs because they have good informations and security. So, to reproduce this study, it is necessary to create an account in [Marvel Developer Portal](https://developer.marvel.com/documentation/generalinfo).

## Prerequisites 

1. Install the SAM CLI and, to local test, Docker too. The instructions of both are in this [link](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html). In this study i have used Docker version 19 and SAM CLI version 1.3. The SAM documentation doesn't talk about the GIT dependency. So, if you don't have it in your machine, it is necessary to install GIT too.

2. Install NodeJS. In this study I have used the version 12.18.4

3. Install the TypeScript. In this study I have used the version 4.0.3

```
npm i -g typescript

````

4. Install [OpenApitools/openapi-generator](https://openapi-generator.tech/docs/installation). OpenAPI Generator is a tool designed to create API client libraries, server stubs, configurations, and documentation from OpenAPI 2.0 and 3. x documents. Marcos also used this tool, however, to generate a server. In this study I generated a client using Axios. 


## Steps to generate a Lambda that will call the Marvel characters API

1. Clone this project.

2. Install the [aws-sam-webpack-plugin](https://www.npmjs.com/package/aws-sam-webpack-plugin) and its dependencies. SAM doesn't have good support for TypeScript. So, this tool replaces the sam build step for AWS SAM CLI projects. This plugin 






