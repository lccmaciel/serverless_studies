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

2. Install the [aws-sam-webpack-plugin](https://www.npmjs.com/package/aws-sam-webpack-plugin) and its dependencies. SAM doesn't have good support for TypeScript. This tool replaces the sam build step for AWS SAM CLI projects. This plug still automatically generate VS Code debugging configuration. Finally, it uses a [webpack](https://webpack.js.org/) that allows a much cleaner build and only with the necessary dependencies.

3. Install the axios. This is a promise based HTTP client for the browser and node.js.

```
npm install axios
```

4. Install the crypto-js and the @types\crypto-js to generate the MD5 hash to meet the security requirement of the Marvel API portal


```
npm install crytpo-js
npm install @types\crytpo-js
```

5. Generate the client using the openapi-generator


```
openapi-generator generate -g typescript-axios -i marvel.json -o ./src/marvelCharacters/.
```

6. Create a user environment variable with the name NODE_ENV and set the value as "development" initially. It will be used to decide how the build will be generated. If you want to generate a production build, set the value to "production".

7. Open the folder in Visual Code. Through the terminal perform the build. It will generate the same .aws-sam folder when using the SAM build. A folder called .vscode is also generated where you have the configuration so that we can perform the test.

```
npm run-script build
```
8. Test: To test, we will use the SAM local invoke command passing JSON with the super hero Id as an event. This command will raise a listener on port 5858 allowing us to test our Lambda.

```
sam local invoke -d 5858 -e event.json MarvelCharactersFunction
```


Some superhero ids to use in tests:

.Hulk: 1009351
.Wolverine: 1009718
.Thor: 1009664
.Storm: 1009629

Start the debug (Ctrl + Shift + D). It will use the settings created in the build. Put break points in the typescript code so you can debug.


9. Deploy: Run the SAM deploy --guided command.

It will generate the lambda, a role with the necessary permissions and the API. Log into the AWS console, check and test. As everything was generated with CloudFormation, cleaning the environment can also be done in a simple way.







