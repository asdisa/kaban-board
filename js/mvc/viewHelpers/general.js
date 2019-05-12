function parseIntRespectingNull(str) {
    return parsed = str == "null" ? null : parseInt(str); 
}

function focusElement(element) {
    setTimeout(() => {
        element.focus();
    }, 0);
}

function setAttributes(element, attrDict) {
    for (let attr in attrDict) {
        element.setAttribute(attr, attrDict[attr]);
    }
}

function meep_moop(element) {
    (async () => {
        element.style.webkitTransform = "rotate(-4deg)";
        await new Promise(r => setTimeout(r, 150));
        element.style.webkitTransform = "rotate(2deg)";
        await new Promise(r => setTimeout(r, 100));
        element.style.webkitTransform = "rotate(0deg)";
    })();
}

function scrollToBottom(element){
    element.scrollTop = element.scrollHeight - element.clientHeight;
}