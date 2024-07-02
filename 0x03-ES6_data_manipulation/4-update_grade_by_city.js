/**
 * Updates the grades of students living in a specified city.
 *
 * @param {Object[]} students - An array of student objects, each containing `id`, `location`
 * @param {string} city - The city to filter students by.
 * @param {Object[]} newGrades - An array of grade update objects, each containing `studentId` and `grade` properties.
 * @returns {Object[]} An array of student objects with updated grades for those living in the specified city. eg [{id:2, grade:98, firsName:"Brian"}, ...]
 */
function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student)=>(student.location === city)).map((student)=>{
    let grade;
    for (let i=0; i < newGrades.length; i++){
      grade = newGrades[i];
      if (grade.studentId === student.id){
        if (grade.grade){
          student.grade = grade.grade;
        }
        else {
          student.grade = "N/A";
        }
        break;
      }
    }
    return student;
  })
}