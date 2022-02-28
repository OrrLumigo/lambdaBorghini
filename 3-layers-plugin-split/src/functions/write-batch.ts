import * as DynamoDB from "../lib/DynamoDB";
import {initSecret} from "../lib/SSM";


export const handler = async (items): Promise<void> => {
    const secret = await initSecret('top-secret','TOP_SECRET');
    if(secret === "top-secret message"){
        for (const item of items) {
            await DynamoDB.createItem(process.env.USERS_TABLE!,item)
        }
    } else{
        console.log("bad secret")
    }

};
