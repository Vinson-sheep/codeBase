/**
 * Created by yys-tt on 2017/7/16.
 */
function getInnerText(element) {
    return (typeof element.textContent == "string")?
        element.textContent : element.innerText;
}

function setInnerText(element,text) {
    if (typeof element.textContent == "string") {
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}