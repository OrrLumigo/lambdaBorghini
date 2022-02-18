const ssm = require('aws-sdk/clients/ssm');
const SSM = new ssm();

export const initSecret = async (parameterStoreName: string, envVarName: string): Promise<void> => {
  if (!process.env[envVarName]) {
    const Parameter = await SSM.getParameter({
      Name: parameterStoreName,
      WithDecryption: true,
    }).promise();
    process.env[envVarName] = Parameter.Parameter?.Value;
    return Parameter.Parameter?.Value;
  }
};