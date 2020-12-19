// lib/db.js
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'login',
  password: 'toor'
});
connection.connect();
module.exports = connection;