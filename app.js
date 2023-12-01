const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
require('./app/helper/db');
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb',
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', require('./app/routes/route'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
});