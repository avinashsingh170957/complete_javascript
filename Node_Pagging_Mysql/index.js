const conn = require('./conn.js');
const { users, surnames,cities } = require('./source.js');

async function main(params) {
    return new Promise((resolve, reject) => {  
        for (let i = 1; i <= 5000; i++) {
            const guid = crypto.randomUUID();
            const fname = users[Math.floor(Math.random() * users.length)];
            const lname = surnames[Math.floor(Math.random() * surnames.length)];
            const city = cities[Math.floor(Math.random() * cities.length)];
            conn.query('INSERT into nodedemo(guid,fname,lname,city) VALUES(?,?,?,?)',[guid,fname,lname,city],(err,results)=>{
                if(err){
                    console.log(`Error` , err);                    
                }               
                resolve(results)
            })

            
        }
    })
}

main();