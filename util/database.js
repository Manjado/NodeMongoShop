const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://xxxxxxxxxx@cluster0-flk3y.mongodb.net/test?retryWrites=true')
        .then(client => {
            console.log('connected!');
            callback(client)
        })
        .catch(err => console.log(err));
}

module.exports = mongoConnect;