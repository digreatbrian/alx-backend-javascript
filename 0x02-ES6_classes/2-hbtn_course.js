/**
 * represents a Holberton course
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse
   * @param {String} name - name of course
   * @param {Number} length - how long the course is (months)
   * @param {String[]} students - names of students in the course
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Getter for the name of this course
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the name of this course
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Getter for the length of this course (months)
   */
  get length() {
    return this._length;
  }

  /**
   * Setter for the length of this course (months)
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Getter for the names of students in this course
   */
  get students() {
    return this._students;
  }

  /**
   * Setter for the names of students in this course
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
