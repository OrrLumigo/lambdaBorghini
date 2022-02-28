import * as _ from 'lodash';
import AWS from 'aws-sdk';
const DocumentClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

export type GetSingleByPartitionKeyParams = {
  tableName: string;
  hashName: string;
  hashValue: string;
  strong?: boolean;
};

export const getSingleByPartitionKey = async <T>({
  tableName,
  hashName,
  hashValue,
  strong = false,
}: GetSingleByPartitionKeyParams): Promise<T> => {
  const data = await DocumentClient.get({
    TableName: tableName,
    ConsistentRead: strong,
    Key: {
      [`${hashName}`]: hashValue,
    },
  }).promise();
  return data.Item as T;
};

export const createItem = async <T>(tableName: string, item: T): Promise<T> => {
  await DocumentClient.put({
    TableName: tableName,
    Item: item,
  }).promise();
  return item;
};

export const batchGetItems = async <T>(tableName: string, keys: any[]): Promise<Array<T>> => {
  const batch = await DocumentClient.batchGet({
    RequestItems: {
      [tableName]: {
        Keys: keys,
      },
    },
  }).promise();
  return batch!.Responses![tableName] as Array<T>;
};



export const batchWrite = async <T>(tableName: string, items: Array<T>): Promise<void> => {
    const putItems = items.map((item) => {
      return {
        PutRequest: {
          Item: item,
        },
      };
    });
    const chunks = _.chunk(putItems, 25);
    await Promise.all(
      chunks.map(async (chunk: any[]) => {
        const params = {
          RequestItems: {
            [tableName]: chunk,
          },
        };
        await DocumentClient.batchWrite(params).promise();
      })
    );
};

export type BatchWriteMultipleTablesInput = {
  tableName: string;
  items: any;
}[];

export const batchWriteMultipleTables = async (
  batchWriteMultipleTablesInput: BatchWriteMultipleTablesInput
): Promise<void> => {
  await Promise.all(
    batchWriteMultipleTablesInput.map(async (input) => {
      const tableName = input.tableName;
      const putItems = input.items.map((item) => {
        return {
          PutRequest: {
            Item: item,
          },
        };
      });
      const chunks = _.chunk(putItems, 25);
      await Promise.all(
        chunks.map(async (chunk: any[]) => {
          const params = {
            RequestItems: {
              [tableName]: chunk,
            },
          };
          await DocumentClient.batchWrite(params).promise();
        })
      );
    })
  );
};
