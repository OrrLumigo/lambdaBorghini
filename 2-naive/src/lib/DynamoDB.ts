import AWS from 'aws-sdk';
const DocumentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

export const createItem = async <T>(tableName: string, item: T): Promise<T> => {
  await DocumentClient.put({
    TableName: tableName,
    Item: item,
  }).promise();
  return item;
};

