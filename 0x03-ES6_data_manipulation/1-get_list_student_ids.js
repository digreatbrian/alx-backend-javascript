function getListStudentIds(students){
  /**
   * getListStudentIds - Returns an array of ids from a list of object
   * @students: Array of student objects
   * return: If the argument is not an array (empty array) else array of student ids
  */
  if (!(Array.isArray(students))){
    // not an array
    return [];
  }
  return students.map((student)=>(student.id));
}
