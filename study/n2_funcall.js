var  http  =  require('http');
var otherfun = require("./models/otherfuns.js");
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        funname = 'fun3';
        otherfun[funname](response);
        response.end('');//不写则没有http协议尾,但写了会产生两次访问
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');

/*
 启动服务
 cmd下执行：
 node  n1_hello.js
 浏览器访问：http://localhost:8000
 */

