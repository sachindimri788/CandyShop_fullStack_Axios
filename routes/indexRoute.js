const express = require('express');
const router= express.Router();
const shopRoute=require('./shopRoute');


router.use('/shop',shopRoute);

module.exports=router;