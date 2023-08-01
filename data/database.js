const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
let database;

async function connectToDatabase(req ,res) {

   const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
   database=client.db('online-shop');
}

function getDb() {
    if(!database)
    {
        throw new Error('You must connect database first!');
    }
    return database;
}

module.exports = {
    connectToDatabase:connectToDatabase,
    getDb:getDb
};

