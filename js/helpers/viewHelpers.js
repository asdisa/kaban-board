
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
