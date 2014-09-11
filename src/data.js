/**
 * Adds data to the element.
 *
 * @param {Element} element The element to get data from.
 * @param {String} name The name of the data to return.
 *
 * @returns {Mixed}
 */
export function get (element, name) {
  if (element.__SKATE_DATA) {
    return element.__SKATE_DATA[name];
  }
}

/**
 * Adds data to the element.
 *
 * @param {Element} element The element to apply data to.
 * @param {String} name The name of the data.
 * @param {Mixed} value The data value.
 *
 * @returns {undefined}
 */
export function set (element, name, value) {
  if (!element.__SKATE_DATA) {
    element.__SKATE_DATA = {};
  }

  element.__SKATE_DATA[name] = value;

  return element;
}
