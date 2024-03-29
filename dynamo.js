const AWS = require('aws-sdk');
require('dotenv').config(); 

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    // secresAccessKey: process.env.AWS_SECRET_ACCESS_KEY don't have 
})

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "harrypotter-api";

const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    const characters = await dynamoClient.scan(params).promise();
    console.log(characters);
    return characters
}

const addOrUpdateCharacter = async (character) => {
    const params = {
        TableName: TABLE_NAME,
        Item: character
    }
    return await dynamoClient.put(params).promise(); 
}

const getCharacterById = async (id) =>{
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.get(params).promise();
}

const deleteCharacter = async (id) =>{
    const params = {
        TableName: TABLE_NAME,
        Key: {
            id
        }
    }
    return await dynamoClient.delete(params).promise();
}

module.exports = {
    dynamoClient,
    getCharacterById,
    getCharacters,
    addOrUpdateCharacter,
    deleteCharacter
}