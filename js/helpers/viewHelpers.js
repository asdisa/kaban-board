/**
 * Immediatly focus `element`.
 *
 * @param {Element} element Element to focus.
 */
function focusElement(element) {
  setTimeout(() => {
    element.focus();
  }, 0);
}

/**
 * Set multiple attributes of `element` to corrsponding values.
 *
 * @param {Element} element Element in question.
 * @param {Map} attrMap Attr-value map.
 */
function setAttributes(element, attrMap) {
  for (const [attrName, value] of attrMap) {
    element.setAttribute(attrName, value);
  }
}

/**
 * Shake `element` a bit.
 *
 * @param {Element} element Element to wiggle.
 */
function wiggleElement(element) {
  (async () => {
    element.style.webkitTransform = 'rotate(-4deg)';
    await new Promise(r => setTimeout(r, 150));
    element.style.webkitTransform = 'rotate(2deg)';
    await new Promise(r => setTimeout(r, 100));
    element.style.webkitTransform = 'rotate(0deg)';
  })();
}

/**
 * Scroll down scrollable `element` all the way down.
 *
 * @param {Element} element Element to scroll.
 */
function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight - element.clientHeight;
}
