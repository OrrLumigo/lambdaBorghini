import {initSecret} from "../lib/SSM";

const promise = initSecret('top-secret','TOP_SECRET');

export const handler = async ({n}) => {
    const res = await promise.then((secret)=>{
        console.log("secret: ", secret);
        console.log('n' ,n);
        let a = 0, b = 1, fib = 0;
        while(n>0){
            fib = a + b;
            a = b;
            b = fib;
            n --;
        }
        return fib;
    })
    return res;
};
