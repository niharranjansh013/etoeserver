//get the mongo library
var mongo = require('mongodb')
async function getDBConn(){
   //get the Mongob server address
   var url = "mongodb+srv://FormEndtoEnd:password213.@formetoe.sjd6ibw.mongodb.net/"
   //Mongodb server---Database---collection---documents
   //using MongoClient we can connect with mongo servers
   var mongoClient = mongo.MongoClient
   //connect method returns promise object we have retrive the data here using await keyword
   var server = await mongoClient.connect(process.env.DB_CONN_URL)
   var db = server.db("School")
   return db
}
module.exports=getDBConn