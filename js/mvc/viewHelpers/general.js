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


function focusElement(element) {
  setTimeout(() => {
    element.focus();
  }, 0);
}

function setAttributes(element, attrMap) {
  for (const [attrName, value] of attrMap) {
    element.setAttribute(attrName, value);
  }
}

function wiggleElement(element) {
  (async () => {
    element.style.webkitTransform = 'rotate(-4deg)';
    await new Promise(r => setTimeout(r, 150));
    element.style.webkitTransform = 'rotate(2deg)';
    await new Promise(r => setTimeout(r, 100));
    element.style.webkitTransform = 'rotate(0deg)';
  })();
}

function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight - element.clientHeight;
}
