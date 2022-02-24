import {initSecret} from "../lib/SSM";
import * as DynamoDB from "../lib/DynamoDB";

export const handler = async (items) => {
    const secret = await initSecret('top-secret','TOP_SECRET');
    if(secret === "top-secret message"){
        await Promise.all(items.map(async(item)=>DynamoDB.createItem(process.env.USERS_TABLE!,item)));
        console.log("success")
    } else{
        console.log("bad secret")
    }

};
