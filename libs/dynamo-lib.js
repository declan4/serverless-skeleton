import AWS from "aws-sdk"

AWS.config.update({ region: "eu-west-1" })

const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

export function call(action, params) {
  	const dynamoDb = new AWS.DynamoDB.DocumentClient()
  	return dynamoDb[action](params).promise()
}

export function createSet(list) {
	const dynamoDb = new AWS.DynamoDB.DocumentClient()
	return dynamoDb.createSet(list)
}

export function getUserDetails(userId) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient()
    
    const params = {
        TableName: "",
        Key: {
            userId: userId
        }
    }

    return dynamoDb["get"](params).promise()
}
