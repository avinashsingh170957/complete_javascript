const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'server',
    database: 'precticeexam'
});

conn.connect((err) => {
    if (err) {
        console.log(`Error`, err);
    } else {
        console.log(`Database Connected !`);
    }
});

module.exports = conn;
