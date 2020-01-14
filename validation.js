//validations
const Joi = require('@hapi/joi');

// register validation
const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      // .max(255)
      .required(),
    email: Joi.string()
      .min(5)
      // .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

// login validation
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      // .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

//exports
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
