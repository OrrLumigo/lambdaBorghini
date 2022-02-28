import {appsync, jimp} from "../lib/Appsync";

export const handler = async () => {
    console.log("start")
    appsync()
    jimp()
    console.log("success")

};
