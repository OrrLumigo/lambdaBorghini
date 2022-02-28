import Jimp from 'jimp';
import AWSAppSyncClient from "aws-appsync";
import {initSecret} from "../lib/SSM";

const promise = initSecret('top-secret','TOP_SECRET');

export const handler = async () => {
    console.log("start")
    console.log(Jimp.name)
    console.log(AWSAppSyncClient.name)
    return promise.then(async (secret)=>{
        if(secret === "top-secret message"){
            console.log("success")
        } else{
            console.log("bad secret")
        }

    });
};
