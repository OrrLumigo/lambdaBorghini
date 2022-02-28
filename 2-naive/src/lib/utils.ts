import Jimp from 'jimp';
import AWSAppSyncClient from "aws-appsync";
const AWS = require('aws-sdk');
const ssm = new AWS.SSM({region: 'us-east-1'});

// BY APPSYNC
export const appsync = ()=>{
    return AWSAppSyncClient.name
}

export const jimp = ()=>{
    return Jimp.name
}

// BY WRITE BATCH
export const initSecret = async (parameterStoreName: string, envVarName: string): Promise<string | undefined> => {
    const Parameter = await ssm.getParameter({
        Name: parameterStoreName,
        WithDecryption: true,
    }).promise();
    process.env[envVarName] = Parameter.Parameter?.Value;
    return Parameter.Parameter?.Value;
};