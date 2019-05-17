/**
 * Immediatly focuses `element`.
 *
 * @param {Element} element Element to focus.
 */
function focusElement(element) {
  setTimeout(() => {
    element.focus();
  }, 0);
}

/**
 * Sets multiple attributes of `element` to their corresponding values.
 *
 * @param {Element} element Element which attributes will be set.
 * @param {Map} attrMap Attr-value map.
 */
function setAttributes(element, attrMap) {
  for (const [attrName, value] of attrMap) {
    element.setAttribute(attrName, value);
  }
}

/**
 * Shakes `element` a bit.
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
 * Scrolls down scrollable `element` all the way down.
 *
 * @param {Element} element Element to scroll.
 */
function scrollToBottom(element) {
  element.scrollTop = element.scrollHeight - element.clientHeight;
}
