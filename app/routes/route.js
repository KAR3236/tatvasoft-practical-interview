const express = require('express');
const router = express();

router.use('/', require('./router/userRoute'));
router.use('/', require('./router/blogRoute'));

module.exports = router;