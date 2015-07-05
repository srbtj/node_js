var mysql = require('mysql');
var tableName = 'tb_user';

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'node_js_db',
    multipleStatements:true /** multiple statement code operator ,default : false */
});

connection.on('error',function(err){
    console.info('opeartor database error');
    connection.end();
});

/** connection to identified database , insert data to db */
connection.connect(function(err){
    if(err){ console.info( ' connection failed');}
    else{
        console.info( ' connection success ' );
        //insertUser();
        updateUser();
    }
});

function insertUser(){

    var str = '';


    for(var i = 1;i<=3;i++){
        str += ' insert into ' + tableName + ' (username,nickname,age) ' +
            ' values (' + connection.escape('srbtj_'+i) +
            ',' + connection.escape('srbtj_'+i) +
            ',' + connection.escape(26) +');';
    };

    connection.query(str,function(err,result){
        if(err){ console.info( ' insert data failed ' );}
        else{
            updateUser();
        }
    });
};

function updateUser(){

    connection.query(' update ' + tableName + ' set username = ? where ' +
        ' nickname = ? ',['lili','srbtj_2'] ,function(err,result){

        if(err){ console.info( ' update data failed ' );  console.info(err);}
        else{
            deleteUser();
        }
    });
};

function deleteUser(){

    connection.query(' delete from ' + tableName + ' where username = ?',['srbtj_1'],function(err,result){
        if(err){ console.info( ' delete user failed ' );}
        else{
            searchAllUser();
        }
    });
};

function searchAllUser(){
    connection.query(' select * from ?? ',[tableName],function(err,result){
        if(err){ console.info( ' query user failed ');}
        else{
            console.info(result);
            connection.end();
        }
    });
};