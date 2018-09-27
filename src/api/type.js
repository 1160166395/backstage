var http = require("http");
var url = require("url");
var conn = require("./conn.js");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
// 路由 
app.get('/type', function (req, res) {
    res.writeHead(200,{"content-type":"text/html,charset=utf-8"});
    var sql = "select * from type";
    conn.query(sql,(err,result)=>{
        res.end(JSON.stringify(result));
    });
});
app.get('/del',function (req, res) {
    res.writeHead(200,{"content-type":"text/html,charset=utf-8"});
    var type = req.query.type;console.log(type)
    var sql = "delete from type where type = '"+type+"'";
    conn.query(sql,(err,result)=>{
    });
    var sql2 = "delete from goods where type ='"+type+"'";
    conn.query(sql2,(err,result)=>{
    });
    res.end();
});
//添加 
app.get('/add',function (req, res) {
    res.writeHead(200,{"content-type":"text/html,charset=utf-8"});
    var con = req.query.con;
    var sql = "insert into type (type) values ('"+con+"')";
    conn.query(sql,(err,result)=>{
    });
    var sql = "select * from type";
    conn.query(sql,(err,result)=>{
        res.end(JSON.stringify(result));
    });

});
// 开启服务器 
app.listen(8081);