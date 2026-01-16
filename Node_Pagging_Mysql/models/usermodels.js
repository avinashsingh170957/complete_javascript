const conn = require("../conn");

class usermodel {

async getAllUsers(limit,offset,Search){
    return new Promise((resolve,reject)=>{
        conn.query(`SELECT id, guid,fname,lname,city,DATE(create_at) AS created_date,COUNT(*) OVER() AS total_record FROM nodedemo WHERE fname like '${Search}%' or lname like '${Search}%' LIMIT ${limit} OFFSET ${offset};`,(err,result)=>{
            if(err){
                console.log(`error` , err);  
                reject(err)              
            }
            else
            {
                resolve(result)
            }
        })
    })
}
}

module.exports = new usermodel();