/**
 * Filters students based on their location.
 *
 * @param {Array} students - Array of student objects.
 * @param {string} location - Location to filter by.
 * @returns {Array} Array of students at the specified location.
 */
function getStudentsByLocation(students, location) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter(student => student.location === location);
}
