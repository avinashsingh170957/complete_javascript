const mysql = require('mysql');
console.log();

const conn = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

conn.connect((err) => {
    if (err) {
        console.log(`Error`, err);
    } else {
        console.log(`Database Connected !`);
    }
});

module.exports = conn;
