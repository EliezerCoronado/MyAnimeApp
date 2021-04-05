/*
Este archivo unicamente servira de plantilla
se debe crear una copia con el nombre database y ese archivo sera
el que se utilice en lo referente al desarrollo ya que la configuracion local es distinta para cada integrante
*/
const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: ""
});

mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
        return;
    }else {
        console.log("DB, Connected...");
    }
});

module.exports = mysqlConnection;