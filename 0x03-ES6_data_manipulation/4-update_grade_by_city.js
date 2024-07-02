/**
 * Updates the grades of students living in a specified city.
 *
 * @param {Object[]} students - An array of student objects, each containing `id`, `location`
 * @param {string} city - The city to filter students by.
 * @param {Object[]} newGrades - An array of grade update objects, each containing `studentId` and `grade` properties.
 * @returns {Object[]} An array of student objects with updated grades for those living in the specified city. eg [{id:2, grade:98, firsName:"Brian"}, ...]
 */
export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  const filterStudents = students.filter(
    (student) => student.location === city,
  );

  const gradeStudents = filterStudents.map(
    (student) => {
      for (const gradeInfo of newGrades) {
        if (student.id === gradeInfo.studentId) {
          student.grade = gradeInfo.grade; // eslint-disable-line no-param-reassign
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
      return student;
    },
  );

  return gradeStudents;
}