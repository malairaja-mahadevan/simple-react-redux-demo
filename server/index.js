const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

app.get('/api/users', function(req,res){
  const obj = fs.readFileSync(path.resolve('server/json/users.json'));
  const json = JSON.parse(obj);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(json);
});

const server = app.listen(port, () => {
  console.log(`Server running at ${port}`)
})

module.exports = server;