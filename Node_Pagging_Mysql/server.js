const express = require('express');
const userorutes = require('./routes/userroutes');
const cors = require('cors')
const bodyparser = require('body-parser')
require('dotenv').config();
const app = express();
app.use(cors({origin : "*"}));
app.use(bodyparser.json())
const PORT = process.env.PORT || 3000;
app.use('/api',userorutes);

app.listen(PORT,()=>{console.log(`server started on ${PORT}`);
})
