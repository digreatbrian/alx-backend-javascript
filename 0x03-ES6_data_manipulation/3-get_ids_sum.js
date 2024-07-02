/**
 * Calculates the sum of student IDs.
 *
 * @param {Object[]} students - An array of student objects.
 * @param {number} students[].id - The ID of each student.
 * @returns {number} The sum of student IDs or 0 if 'students' is not an array.
 */
function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}
