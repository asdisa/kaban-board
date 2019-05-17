/**
 * Behaves as parseInt called on `str`, but parces 'null' as null.
 *
 * @param {string} str String to be parsed
 * @returns {number|null}
 */
function parseIntOrNull(str) {
  return str === 'null' ? null : parseInt(str);
}

/**
 * Parses of elements with IDs shaped as
 * elementType-parentIndex-childIndex or
 * elementType-childIndex.
 *
 * @param {Element} element Element with id containing indices
 * @returns {?number[]}
 */
function getElementIndices(element) {
  const idParts = element.id.split('-');
  if (idParts.length === 3) {
    const parentIndex = parseIntOrNull(idParts[1]);
    const childIndex = parseIntOrNull(idParts[2]);
    return [parentIndex, childIndex];
  }
  return [null, parseIntOrNull(idParts[1])];
}

/**
 * Detemines whether `obj`, has property `propertyName`.
 *
 * @param {string} str String to be parsed
 * @returns {number|null}
 */
function has(obj, propertyName) {
  return obj ? hasOwnProperty.call(obj, propertyName) : false;
}
