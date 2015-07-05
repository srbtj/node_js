var mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'node_js_db'
});

pool.getConnection(function(err,connection){
   if(err){ console.info('connection failed,error message:' + err.message);}
   else{
//       connection.query('select * from tb_user',function(err,result){
//           if(err){ console.info(' search failed,error message:' + err.message);}
//           else{
//               console.info(result);
//               pool.end();
//           }
//       });

       var query = connection.query("select * from tb_user");
       query.on('error',function(err){
           if(err){
               console.info('search error,error message:' + err.message);
               process.exit();
           };
       })
           .on('fields',function(fields){
               var str = '';
               fields.forEach(function(field){
                   if(str){
                       str += String.fromCharCode(9);
                   }
                   str += field.name;
               })
               console.info(str);
           })
           .on('result',function(data){
               console.info(data.id + String.fromCharCode(9) + data.username + String.fromCharCode(9) + String.fromCharCode(9) + data.nickname + String.fromCharCode(9) + String.fromCharCode(9) + data.age + '\r\n');
           })
           .on('end',function(){
               console.info('connection end');
               connection.end();
           });
   }
});