// eslint-disable-next-line @typescript-eslint/no-var-requires
const Lambda = require('aws-sdk/clients/lambda');
const lambda = new Lambda({
    region: "us-east-1"
});
export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};


export const updateConf = async (
    functionName: string,
    key: string,
    value: string
)=>{
    const functionConfiguration = await lambda
        .getFunctionConfiguration({ FunctionName: functionName })
        .promise();
    let variables = functionConfiguration["Environment"]["Variables"];
    variables[key] = value;
    const res = await lambda.updateFunctionConfiguration({
        FunctionName: functionName,
        Environment: {
            Variables: variables
        }
    }).promise();
    return res;
}

export const invokeLambda = async (
    lambdaFunctionName: string,
    payload: any,
    InvocationType: 'RequestResponse' | 'Event',
    logType: 'None' | 'Tail' = 'None'
): Promise<any> => {
    // If the payload isn't a JSON string, we convert it to JSON
    let payloadStr;
    if (typeof payload === 'string') {
        payloadStr = payload;
    } else {
        payloadStr = JSON.stringify(payload, null, 2);
    }

    const params = {
        FunctionName: lambdaFunctionName /* string type, required */,
        InvocationType,
        LogType: logType /* string type: 'None' | 'Tail' */,
        // LogType        : 'Tail',
        Payload:
        payloadStr /* Buffer.from('...') || 'JSON_STRING' */ /* Strings will be Base-64 encoded on your behalf */,
    };

    const lambdaResult = await lambda.invoke(params).promise();

    console.log(
        `${lambdaFunctionName} lambdaResult: `,
        JSON.stringify(lambdaResult, null, 2)
    );

    return lambdaResult;
};
