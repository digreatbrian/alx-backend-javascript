/**
   * getListStudentIds - Returns an array of ids from a list of object
   * @param {Array} students: Array of student objects
   * @returns: If the argument is not an array (empty array) else array of student ids
  */
function getListStudentIds(students){
  if (!(Array.isArray(students))){
    // not an array
    return [];
  }
  return students.map((student)=>(student.id));
}
