var http = require("http");
var url = require("url");
var conn = require("./conn.js");

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html,charset=utf-8"});
    var ip = res.connection.remoteAddress;
    //路径
    var router = url.parse(req.url,true);
    switch(router.pathname){
        case'/type':
            var sql = "select type from type";
            conn.query(sql,(err,result)=>{
                res.end(result);
            })

        break;
        default:
        res.end();
    }
}).listen(8081);
// var express = require('express');
// var app = express();
// // 路由 
// app.get('/type', function (req, res) {
//     var sql = "select type from type";
//     conn.query(sql,(err,result)=>{
//         console.log(err);
//         console.log(result);
//         res.send(result);
// })
// // 开启服务器 
// var server = app.listen(8081)