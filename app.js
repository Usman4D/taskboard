// importing modules
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')

// import routes
const boardRouter = require('./src/routes/boardRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use('/', boardRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

