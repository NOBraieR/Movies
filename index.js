
const express = require('express');

const app = express();
const path = require('path');

const PORT = 3000;

app.set('view engine' , 'html');

app.get('/' , (req,res,next)=>{
  console.log(req.headers);
  res.sendFile(path.join(__dirname+'/index.html' ))
});

app.listen(PORT , (error)=>{
if(error)
  console.error(error);
else {
  console.log("server on port " , PORT);
}
});
