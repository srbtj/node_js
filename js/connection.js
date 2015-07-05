var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'node_js_db'
});

connection.connect(function(err){

    if(err){
        consone.info(err);
        console.info('与mySql数据库连接失败。');
    }else{
        console.info('与MySql数据库连接成功');
        connection.end(function(err){
            if(err){
                console.info('关闭MySql数据库失败');
            }else{
                console.info('誊MySql数据库成功');
            }
        });
    }
});

//console.info('test success')
