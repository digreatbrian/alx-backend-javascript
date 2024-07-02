export default function getStudentIdsSum(students) {
  return students.reduce((sm, student) => sm + student.id, 0);
}
