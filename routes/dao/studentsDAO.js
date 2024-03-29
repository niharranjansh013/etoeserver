const { ObjectId } = require('mongodb')
var getDBConn=require('../../common/getDBConn')
var objectId=require('mongodb').ObjectId
async function regStudentDAO(data) {
    console.log("regStudentDAO")
    var db=await getDBConn()
    
    var collection = db.collection("student")
    //insert the data in the collection
    var result = await collection.insertOne(data)
    console.log("dao given result back to service")
    return result
    //here async function returns the result in the form of Promise so we can handle it in service by putting await keyword
}

async function loginDAO(data){
    const{uid,pwd}=data
     const db=await getDBConn()
    const collection= db.collection("student")
   const result=await collection.find({uid,pwd}).toArray()
   return result
}

async function getStudentDAO() {
    console.log("getStudentDAO")
    var db=await getDBConn()
    var collection = db.collection("student")
    //insert the data in the collection
    var result = await collection.find().toArray() //toArray returns a cursor ,iterator we can convert it to array of objects
    return result
}
async function updateStudentDAO(id,data){
   var db= await getDBConn()
   var collection=db.collection("student")
  var result= await collection.updateOne({_id:new ObjectId(id)},{$set:data})
  return result
}
async function deleteStudentDAO(id){
    var db= await getDBConn()
    var collection=db.collection("student")
   var result= await collection.deleteOne({_id:new ObjectId(id)})
   return result
 }

 async function getStdByIdDAO(id){
    var db= await getDBConn()
    var collection=db.collection("student")
   var result= await collection.findOne({_id:new ObjectId(id)})
   return result
 }
module.exports = {
    getStdByIdDAO,
    loginDAO,
    regStudentDAO,
    getStudentDAO,
    updateStudentDAO,
    deleteStudentDAO
}