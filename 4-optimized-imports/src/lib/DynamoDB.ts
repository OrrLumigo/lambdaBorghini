import DynamoDB from 'aws-sdk/clients/dynamodb';

const DocumentClient = new DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  region: process.env.AWS_REGION || 'us-east-1',
});


export const createItem = async <T>(tableName: string, item: T): Promise<T> => {
  await DocumentClient.put({
    TableName: tableName,
    Item: item,
  }).promise();
  return item;
};
