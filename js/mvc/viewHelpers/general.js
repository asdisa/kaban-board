/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */

function parseIntRespectingNull(str) {
  return str === 'null' ? null : parseInt(str);
}

function getElementIndices(element) {
  const idParts = element.id.split('-');
  if (idParts.length === 3) {
    const parentIndex = parseIntRespectingNull(idParts[1]);
    const childIndex = parseIntRespectingNull(idParts[2]);
    return [parentIndex, childIndex];
  }
  return [null, parseIntRespectingNull(idParts[1])];
}


function focusElement(element) {
  setTimeout(() => {
    element.focus();
  }, 0);
}

function setAttributes(element, attrDict) {
  for (const attr of attrDict) {
    element.setAttribute(attr, attrDict[attr]);
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
