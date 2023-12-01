const express = require('express');
const { registrationController, loginController } = require('../../controller/userController');
const router = express();
const { validator } = require('../../helper/validator')
const { registrationValidation, loginValidation } = require('../../validation/userValidation')

router.post('/api/user/registration', validator.body(registrationValidation), registrationController);
router.post('/api/user/login', validator.body(loginValidation), loginController);

module.exports = router;