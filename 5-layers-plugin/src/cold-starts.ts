import {invokeLambda} from "./lib/Lambda";

const payload = [
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
    {
        id: "1",
        name: "1",
    },
];
(async ()=>{
    for(let i = 0; i < 10000; i++){
        await new Promise((resolve) => setTimeout(resolve, 100));
        invokeLambda("lambdaborghini-2-naive-write-batch", payload, "Event")
        invokeLambda("lambdaborghini-3-optimized-imports-write-batch", payload, "Event")
        invokeLambda("lambdaborghini-4-webpack-write-batch", payload, "Event")
        // invokeLambda("lambdaborghini-5-layers-plugin-write-batch", payload, "Event")
        // invokeLambda("lambdaborghini-6-layers-plugin-split-write-batch", payload, "Event")

    }
})()