/**
 * Created by yys-tt on 2017/7/17.
 */
function getStyleSheet(element) {
    //考虑到IE不支持sheet，但支持sheet
    return element.sheet || element.styleSheet;
}