import {appsync, jimp} from "../lib/utils";

export const handler = async () => {
    console.log("start")
    appsync()
    jimp()
    console.log("success")

};
