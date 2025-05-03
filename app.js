// importing modules
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')

// import routes
const boardRouter = require('./src/routes/boardRoute');
const listRouter = require('./src/routes/listRoute');
const taskRouter = require('./src/routes/listRoute');

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use('/', boardRouter);
app.use('/', listRouter);
app.use('/', taskRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

