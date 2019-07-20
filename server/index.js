const express = require('express');
const port = process.env.PORT || 8080;

const app = express();
require('./routes')(app);

const server = app.listen(port, () => {
  console.log(`Server running at ${port}`)
})

module.exports = server;