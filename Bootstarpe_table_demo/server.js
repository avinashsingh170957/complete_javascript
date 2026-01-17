const express = require('express');
const app = express();
const userdata = require('./data.json')
const PORT = 3000
const cors = require('cors');

app.use(cors({origin : "*"}));
app.get('/load-json',(req,res)=>{

    res.status(200).json({ userdata : userdata})
})

app.listen(PORT,()=>{
    console.log(`server started on http//localhost:3000`);
    
})