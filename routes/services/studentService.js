var {getStudentDAO,regStudentDAO}=require('../dao/studentsDAO')
function regStudentService(){
  console.log("regStudentService")
  getStudentDAO()
}

function getStudentService(){
    console.log("getStudentService")
    regStudentDAO()
}

module.exports={
    regStudentService,
    getStudentService
}