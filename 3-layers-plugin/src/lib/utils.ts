import Jimp from 'jimp';
import AWSAppSyncClient from "aws-appsync";
const AWS = require('aws-sdk');
const ssm = new AWS.SSM({region: 'us-east-1'});

export const appsync = ()=>{
    return AWSAppSyncClient.name
}


export const jimp = ()=>{
    return Jimp.name
}

export const initSecret = async (parameterStoreName: string, envVarName: string): Promise<string | undefined> => {
    console.log("parameterStoreName", parameterStoreName)
    const Parameter = await ssm.getParameter({
        Name: parameterStoreName,
        WithDecryption: true,
    }).promise();
    console.log("Parameter", Parameter)
    process.env[envVarName] = Parameter.Parameter?.Value;
    return Parameter.Parameter?.Value;
};