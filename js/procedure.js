var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'node_js_db',
    multipleStatements:true
})

//create procedure addUser(
//    in username varchar(20),
//    in nickname varchar(20),
//    in age varchar(20)
//)
//begin
//    insert into tb_user(username,nickname,age)
//    values(username,nickanme,age);
//
//    select * from tb_user;
//end;

connection.connect(function(err){

    if(er){ console.info('connection failed');}
    else{
        insertUser();
    }
});

function insertUser(){

    connection.query();
}