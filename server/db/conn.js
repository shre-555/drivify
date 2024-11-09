import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb://localhost:27017/Drivify";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

try {
  await client.connect();
  await client.db("test").command({ping:1});
  console.log("Successfully connected to MongoDB")

}
catch(err){
  console.log(err);
}

let db= client.db("driver");
export default db;

// const Db = "mongodb://localhost:27017/Drivify";
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
 
// var _db;
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("Drivifys");
//         console.log("Successfully connected to MongoDB."); 
//       }
//       return callback(err);
//          });
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };

