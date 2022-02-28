import * as DynamoDB from "../lib/DynamoDB";
import {initSecret} from "../lib/SSM";


export const handler = async (items) => {
    const secret = await initSecret('top-secret','TOP_SECRET');
    if(secret === "top-secret message"){
        for (const item of items) {
            await DynamoDB.createItem(process.env.USERS_TABLE!,item)
        }
        console.log("success")
    } else{
        console.log("bad secret")
    }

};
