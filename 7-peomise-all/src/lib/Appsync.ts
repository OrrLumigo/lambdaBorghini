import Jimp from 'jimp';
import AWSAppSyncClient from "aws-appsync";

export const appsync = ()=>{
    return AWSAppSyncClient.name
}


export const jimp = ()=>{
    return Jimp.name
}