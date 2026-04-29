const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "leave_system"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

module.exports = db;



// CREATE TABLE employees (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100),
//   email VARCHAR(100),
//   role VARCHAR(50)
// );

// CREATE TABLE leave_requests (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   employee_id INT,
//   reason TEXT,
//   status VARCHAR(20)
// );

// CREATE TABLE leave_requests (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   employee_id INT,
//   reason TEXT,
//   status VARCHAR(20)
// );



