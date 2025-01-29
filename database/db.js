const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

conexion.connect((err) => {
    if (err) {
      console.error('Error al conectar a MySQL:', err.stack);
      return;
    }
    console.log('Conectado a MySQL');
  
    // Crear la base de datos
    conexion.query('CREATE DATABASE IF NOT EXISTS crud_db', (err, results) => {
      if (err) {
        console.error('Error al crear la base de datos:', err.stack);
        return;
      }
      console.log('Base de datos creada o ya existente');
  
      // Seleccionar la base de datos
      conexion.query('USE crud_db', (err, results) => {
        if (err) {
          console.error('Error al seleccionar la base de datos:', err.stack);
          return;
        }
        console.log('Base de datos seleccionada');
  
        // Crear una tabla de ejemplo
        const createTableQuery = `
          CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user VARCHAR(255) NOT NULL,
            rol VARCHAR(255) NOT NULL 
          )
        `;
  
        conexion.query(createTableQuery, (err, results) => {
          if (err) {
            console.error('Error al crear la tabla:', err.stack);
            return;
          }
          console.log('Tabla "usuarios" creada o ya existente');
        });
      });
    });
  });

module.exports = conexion;