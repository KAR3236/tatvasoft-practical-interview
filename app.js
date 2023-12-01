const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('./app/helper/db');

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

app.listen(5000, () => {
    console.log(`Server is running on ${5000}`);
});