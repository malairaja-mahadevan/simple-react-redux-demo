const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser());
require('./routes')(app);

const server = app.listen(port, () => {
  console.log(`Server running at ${port}`)
})

module.exports = server;