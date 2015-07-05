var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'node_js_db',
    multipleStatements:true
});

var out = fs.createWriteStream('./message.txt');

out.on('error',function(err){
    console.info('写文件操作失败，错误信息为：'+err.message);
    process.exit();
});

connection.connect(function(err){
    if(err){ console.info( ' connection error ' );}
    else{
        console.info(' connection success ');
        var query = connection.query(' select * from tb_user ');
        query.on('error',function(err){
            console.info('read date failed ,failed message: ' + err.message);
//            console.info(process);
            process.exit();

        })
            .on('fields',function(fields){
                var str = '';
                fields.forEach(function(data){
                    if(str){
                        str += String.fromCharCode(9);
                    }
                    str += data.name;
                   // console.info(data.name);
                });
                out.write(str+'\r\n');
            })
            .on('result',function(result){
                connection.pause();
                out.write(result.id+String.fromCharCode(9) + result.username + String.fromCharCode(9) + String.fromCharCode(9) +
                          result.nickname + String.fromCharCode(9) +  String.fromCharCode(9) + result.age + '\r\n',function(err){
                    connection.resume();
                });
            })
            .on('end',function(){
                console.info('date read over');
                connection.end();
            });
    }
})