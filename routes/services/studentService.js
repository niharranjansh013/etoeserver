var { getStudentDAO, regStudentDAO } = require('../dao/studentsDAO')
async function regStudentService(data) {
  console.log("regStudentService")
  var result = await regStudentDAO(data)
  console.log("service recieve the result from dao and send to controller ")
  return result
}

async function getStudentService() {
  console.log("getStudentService")
  var result = await getStudentDAO()
  //delete the password while getting the request
  result = result.map((obj) => {
    delete obj.pwd
    return obj
  })
  return result
}

module.exports = {
  regStudentService,
  getStudentService
}