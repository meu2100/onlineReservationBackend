const express = require("express");
const router = express.Router();
const fs = require("fs")

router.get('/service', (req,res)=>{
  res.send('This is page of service list')
})



module.exports = router;
