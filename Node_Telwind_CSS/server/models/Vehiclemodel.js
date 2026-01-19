const conn = require("../config/config");

class Vehiclemodel {
   async getAllCompanyList() {
        return new Promise((resolve, reject) => {
            conn.query(
                'SELECT id, catname, created_date FROM tblcompany',
                (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    resolve(result);
                }
            );
        });
    }


    async getCompnayCategory(compid) {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT DISTINCT tc.id,tc.catname,tc.created_date FROM tblcompany_categoryes tc INNER JOIN tblcompany_category_model tcm ON tc.id = tcm.catid WHERE  tcm.compid = ?`,[compid],(err,result)=>{
                if(err){
                    return reject(err);
                }
                resolve(result)
            })
        })
    }

    async getCompnayCategoryModels(compid,catid) {
        return new Promise((resolve, reject) => {
            const query = `
                SELECT * FROM tblcompany_category_model WHERE catid = ? AND compid = ?
            ` ;
            console.log(`query` , query);
            console.log(compid,catid);           
            
            conn.query(query,[catid,compid],(err,result)=>{
                if(err){
                    return reject(err);
                }
                resolve(result)
            })
        })
    }
}

module.exports = new Vehiclemodel();