(function (angular) {
    //建模
    var app=angular.module('moviecat.http_jsonp',[]);
//    创建服务
    app.service('MyHttp',['$window', function ($window) {
        this.jsonp=function(url,arg,fn){
            //拼接地址
            //?start=0&count=3
            var queryString='';
            for(var key in arg){
                queryString=queryString+key+'='+arg[key]+'&'
            }
            url=url+'?'+queryString;
            var callbackName='jsonp_'+Math.random().toString().substr(2);
            $window[callbackName]=function(data){
                console.log(data);
                fn(data);
                $window.document.body.removeChild(scriptElement);
            }

        }
    }])
})