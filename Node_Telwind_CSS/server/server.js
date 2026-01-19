const express = require('express');
require('dotenv').config();
const conn = require('./config/config');
const Vehiclemodel = require('./models/Vehiclemodel');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors({origin : "*"}));
app.get('/get-models',async (req,res)=>{
    const vehiclamodel = await Vehiclemodel.getAllCompanyList();
    res.status(200).json({models : vehiclamodel})
});
app.post('/categories', async (req,res)=>{
  const { compid } = req.body ;  
   const categories = await Vehiclemodel.getCompnayCategory(compid);
   res.status(200).json({categories : categories})
});
app.post('/get-categories-models', async (req,res)=>{
  const {compid, catid} = req.body;
  const CategoryModels = await Vehiclemodel.getCompnayCategoryModels(compid,catid);

  res.status(200).json({CategoryModels : CategoryModels})
})
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Data Sent!' });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
