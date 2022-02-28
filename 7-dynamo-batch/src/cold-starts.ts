import {invokeLambda, sleep, updateConf} from "./lib/Lambda";

const payload = []
for(let i = 0 ; i < 100 ; i++){
    payload.push({
    // @ts-ignore
        id: i.toString(),
        // @ts-ignore
        name: (Math.random() + 1).toString(36).substring(7),
    })
}
(async ()=>{
    let name = "inc";
    for(let i = 0; i < 10000; i++){
        let value = (Math.random() + 1).toString(36).substring(7);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await Promise.all([
            invokeLambda("lambdaborghini-2-naive-write-batch", payload, "Event"),
            invokeLambda("lambdaborghini-3-layers-plugin-split-write-batch", payload, "Event"),
            invokeLambda("lambdaborghini-4-optimized-imports-write-batch", payload, "Event"),
            // invokeLambda("lambdaborghini-8-webpack-write-batch", payload, "Event"),
            invokeLambda("lambdaborghini-5-optimized-init-write-batch", payload, "Event"),
            invokeLambda("lambdaborghini-6-peomise-all-write-batch", payload, "Event"),
            invokeLambda("lambdaborghini-7-dynamo-batch-write-batch", payload, "Event")
        ]);
        // await Promise.all([
        //     updateConf("lambdaborghini-2-naive-write-batch", name, value),
        //     updateConf("lambdaborghini-3-layers-plugin-split-write-batch", name, value),
        //     updateConf("lambdaborghini-4-optimized-imports-write-batch", name, value),
        //     updateConf("lambdaborghini-4-optimized-imports-write-batch", name, value),
        //     updateConf("lambdaborghini-8-webpack-write-batch", name, value)
        // ]);
    }

})()