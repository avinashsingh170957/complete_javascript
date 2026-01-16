const express = require('express');
const usercontroller = require('../controllers/usercontroller');

const userorutes = express.Router();


userorutes.post('/all-users',usercontroller.getAllUsers)


module.exports = userorutes;