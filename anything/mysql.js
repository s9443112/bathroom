var mysql = require('mysql');


var connection1 = mysql.createConnection({
    host: '139.162.72.78',
    user: 's9443112',
    password: 'game54176868',
    database: 'BANG',
});

var connection2 = mysql.createConnection({
    host:'test',
    user:'test',
    password:'test',
    database:'test',
})


connection1.connect(function (err) {
    if (err) throw err;
    console.log("1 connected!")
}); 
connection2.connect(function (err) {
    if (err) throw err;
    console.log("2 connected!")
}); 

var sql = "SELECT * FROM message";
connection.query(sql,function(error,result){
    if(error) throw error;
    
    console.log(result[1]);
    
});