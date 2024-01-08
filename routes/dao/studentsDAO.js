var getDBConn=require('../../connection/getDBConn')

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

async function getStudentDAO() {
    console.log("getStudentDAO")
    var db=await getDBConn()
    var collection = db.collection("student")
    //insert the data in the collection
    var result = await collection.find().toArray() //toArray returns a cursor ,iterator we can convert it to array of objects
    return result
}

module.exports = {
    regStudentDAO,
    getStudentDAO
}