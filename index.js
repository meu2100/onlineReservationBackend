const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req,res)=>{
  res.send("線上預約系統後端")
})

app.listen(port, ()=>{
  console.log(`App is running on http://localhost:${port}`);
})