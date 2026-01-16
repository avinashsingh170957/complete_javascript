const usermodels = require("../models/usermodels");

class usercontroller {

async getAllUsers(req,res){
    try {
        const {pagenumber , pagesize , Search} = req.body;
        const page = parseInt(pagenumber) || 1;
        const size = parseInt(pagesize) || 10;
        const offset = (page -1) * size ;
        const limit = size ;
        const response = await usermodels.getAllUsers(limit,offset,Search);
        res.status(200).json({users : response})
    } catch (error) {
        console.log(error);
        
        res.status(400).json({error : error})
    }
}

}

module.exports = new usercontroller();