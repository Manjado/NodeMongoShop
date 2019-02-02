const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://xxxxxxx@cluster0-flk3y.mongodb.net/shop?retryWrites=true', { useNewUrlParser: true })
        .then(client => {
            console.log('connected!');
            _db = client.db();
            callback()
        })
        .catch(err => {
           console.log(err)
            throw err;
        });
};

const getDb = () => {
    console.log(_db, 'WTF')
   if(_db) {
      return _db;
   }
   throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;