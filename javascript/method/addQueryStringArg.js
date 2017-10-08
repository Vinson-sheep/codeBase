/**
 * Created by yys-tt on 2017/7/20.
 */
function addQueryStringArg(url, name ,valie){
    if (url.indexOf("?") == -1) {
        url += "?";
    } else {
        url += "&";
    }

    url += encodeURIComponent(name) + "=" +encodeURIComponent(value);
    return url;
}