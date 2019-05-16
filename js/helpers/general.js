function parseIntOrNull(str) {
  return str === 'null' ? null : parseInt(str);
}

function getElementIndices(element) {
  const idParts = element.id.split('-');
  if (idParts.length === 3) {
    const parentIndex = parseIntOrNull(idParts[1]);
    const childIndex = parseIntOrNull(idParts[2]);
    return [parentIndex, childIndex];
  }
  return [null, parseIntOrNull(idParts[1])];
}
