var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'node_js_db'
});

connection.connect(function(err){
    if(err) console.info('create connection fail');
    else{
        console.info('create connection success');
        /** 插入一条数据 */
        insertUser();
    }
});

connection.on('error',function(err){

    if(err){
        console.info('database error');
    }
});

function insertUser(){

    var insertSql = 'insert into tb_user(username,nickname,age) values('+connection.escape('srbtj')+','+connection.escape('srbtj')+','+connection.escape(27)+')';
    connection.query(insertSql,function(err,result){
        if(err){
            console.info('insert data fail');
        }else{
            console.info('insert data success');
            queryAllUser();
            connection.end();
        }
    });
};

function queryAllUser(){
    connection.query('select * from tb_user',function(err,result){
        if(err){
            console.info('search data fail');
        }else{
            console.info(result);
        }
    });
}