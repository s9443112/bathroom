var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '139.162.72.78',
    user: 's9443112',
    password: 'game54176868',
    database: 'BANG',
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected!")
}); 

var sql = "SELECT * FROM message";
connection.query(sql,function(error,result){
    if(error) throw error;
    
    console.log(result[1]);
    
});