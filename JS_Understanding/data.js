const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "server",
    database : "pdf_portal"
});
const connect = connection.connect((err)=>{
    if (err) {
        console.log(`connection error`,err);
    }else {
        console.log(`connected !`);
        
    }
})
async function load_user(params) {
    connection.query("SELECT name,email,role FROM users",(err,result)=>{
        if (err) {
            console.log(`error`,err);            
        }else {
            console.table(result);            
        }
    })
}

load_user();