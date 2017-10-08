/**
 * Created by yys-tt on 2017/7/17.
 */
function scrollToTop(element) {
    //对于整个页面element指的是document.documentElement，即文档元素
    if (element.scrollTop != 0) {
        element.scrollTop = 0
    }
}