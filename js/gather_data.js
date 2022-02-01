function gather_data(questions) {
    var data = '';
    data += get_device_data();
    for (let j = 0; j < questions.length; ++j) {
        data += questions[j] + ': ';
        var elements = document.getElementsByName(questions[j]) ;
        var flg = false;
        for (let i = 0; i < elements.length; ++i) {
            if (elements[i].checked) {
                data += elements[i].value;
                flg = true;
                break;
            }
        }
        if (!flg) data += '未選択';
        if (j !== questions.length - 1) data += '\n';
    }
    return data;
}

function get_device_data() {
    var use = window.navigator.userAgent.toLowerCase();
    var data = '';
    // OS の取得
    data += 'OS: ';
    if (use.indexOf("windows nt") > 0) data += "Microsoft Windows";
    else if (use.indexOf("android") > 0) data += "Android";
    else if (use.indexOf("iphone") > 0 || use.indexOf("ipad") > 0) data += "iOS";
    else if (use.indexOf("mac os x") > 0) data += "macOS";
    else data += "その他";
    data += '\n';
    // ブラウザの取得
    data += 'ブラウザ: ';
    if (use.indexOf("edge") > 0 || use.indexOf("edga") > 0 || use.indexOf("edgios") > 0) data += "Microsoft Edge";
    else if  (use.indexOf("opera") > 0 || use.indexOf("opr") > 0) data += "Opera";
    else if  (use.indexOf("samsungbrowser") > 0) data += "Samsung Internet Browser";
    else if  (use.indexOf("ucbrowser") > 0) data += "UC Browser";
    else if (use.indexOf("chrome") > 0 || use.indexOf("crios") > 0) data += "Google Chrome";
    else if (use.indexOf("firefox") > 0 || use.indexOf("fxios") > 0) data += "Mozilla Firefox";
    else if (use.indexOf("safari") > 0) data += "Safari";
    else if  (use.indexOf("msie") > 0 || use.indexOf("trident") > 0) data += "Internet Explorer";
    else data += "その他";
    data += '\n';
    return data;
}