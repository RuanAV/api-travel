const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  port : process.env.DB_PORT,
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD
});

connection.connect();

module.exports = connection;