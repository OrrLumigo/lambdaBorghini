export const handler = async ({n}) => {
    let a = 0, b = 1, fib = 0;
    while(n>0){
        fib = a + b;
        a = b;
        b = fib;
        n --;
    }
    return fib;
};
