import ssm from 'aws-sdk/clients/ssm';
const SSM = new ssm({region: 'us-east-1'});


export const initSecret = async (parameterStoreName: string, envVarName: string): Promise<string | undefined> => {
    console.log("parameterStoreName", parameterStoreName)
    const Parameter = await SSM.getParameter({
        Name: parameterStoreName,
        WithDecryption: true,
    }).promise();
    console.log("Parameter", Parameter)
    process.env[envVarName] = Parameter.Parameter?.Value;
    return Parameter.Parameter?.Value;
};