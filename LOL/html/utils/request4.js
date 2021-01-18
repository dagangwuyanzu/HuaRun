function request(options) {
    // 基础路径
    var baseUrl = 'http://localhost:1012/api';

    var defaults = {
        type: 'get',
        data: {},
        async: true
    }
    var opt = Object.assign({}, defaults, options);
    // for(var key in options){
    //     defaults[key] = options[key];
    // }
    // var opt = defaults;

    // type类型统一小写
    opt.type = opt.type.toLowerCase();


    opt.url = opt.url.indexOf('http') >= 0 ? opt.url : baseUrl + opt.url;

    // 转换参数格式：{page:1,size:10} => page=1&size=10
    var params = '';
    for (var key in opt.data) {
        params += key + '=' + opt.data[key] + '&'
    }
    // 删除多余&
    params = params.slice(0, -1);

    // 为get,delete请求设置参数：通过url传递
    if (['get', 'delete', 'jsonp'].includes(opt.type)) {
        opt.url = opt.url + (opt.url.includes('?') ? '&' : '?') + params;
        params = null;
    }

    return new Promise(function (resolve, reject) {
        if (opt.type === 'jsonp') {
            // 定义全局函数
            var callbackName = 'getData' + Date.now();// getData15645234652346
            window[callbackName] = function (data) {
                resolve(data);

                // 删除script标签
                document.body.removeChild(script);

                // 删除全局函数
                delete window[callbackName];
            }

            var script = document.createElement('script');
            script.src = opt.url + '&callback=' + callbackName;
            document.body.appendChild(script);
            return;
        }

        // 尝试执行这里的代码，如果报错则执行catch中的代码
        let xhr = new XMLHttpRequest();

        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);// {code,data,msg}
            resolve(data);
        }
        xhr.open(opt.type, opt.url, opt.async);
        // post,put，patch
        if (['post', 'put', 'patch'].includes(opt.type)) {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }
        xhr.send(params);
    })
}

request.jsonp = function (url, data, callback) {
    return request({
        type: 'jsonp',
        url,
        data
    })
}
request.get = function (url, data) {
    return request({
        type: 'get',
        url,
        data
    })
}
request.post = function (url, data) {
    return request({
        type: 'post',
        url,
        data
    })
}
request.put = function (url, data) {
    return request({
        type: 'put',
        url,
        data
    })
}