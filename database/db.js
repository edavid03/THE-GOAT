const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: ' +error);
        return
    }
    console.log('Conectado a la BASE DE DATOS.');

});

module.exports = conexion;