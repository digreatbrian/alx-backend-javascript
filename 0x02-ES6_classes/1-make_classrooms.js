import ClassRoom from './0-classroom';

/**
 * creates an array of classrooms with a specific size
 * @returns an array of classrooms
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
