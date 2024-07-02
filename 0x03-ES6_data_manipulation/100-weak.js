/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to
 */
export function queryAPI(endpoint) {
  // Check if the endpoint exists in the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count++;

  // Check if the count exceeds the threshold
  if (count >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }

  // Store the updated count in the WeakMap
  weakMap.set(endpoint, count);
}

