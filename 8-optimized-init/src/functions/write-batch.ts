import {initSecret} from "../lib/SSM";
import * as DynamoDB from "../lib/DynamoDB";

const promise = initSecret('top-secret','TOP_SECRET');

export const handler = async (items) => {
    console.log("items: ", items);
    return promise.then(async (secret)=>{
        if(secret === "top-secret message"){
            await Promise.all(items.map(async(item)=>DynamoDB.createItem(process.env.USERS_TABLE!,item)));
            console.log("success")
        } else{
            console.log("bad secret")
        }

    });
};