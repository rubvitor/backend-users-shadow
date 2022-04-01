const express = require('express');
const http = require('http');
const cors = require('cors');

//build config from params
const config = require('./config');

//setup app & its routes
const app = express();
app.use(cors());
const routes = require('./routes/index.route');
app.use(routes);

//start http server
const httpServer = http.createServer(app);
httpServer.listen(process.env.PORT || 3000);
console.log(`http server listening at port ${process.env.PORT || 3000}`);

module.exports = { app };