const Joi = require('joi');

module.exports = {
    idValidation: Joi.object().keys({
        id: Joi.number().required().empty(),
    }),
}