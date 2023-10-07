const Joi = require("joi");

const emailRegexp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const userSubscriptions = ["starter", "pro", "business"];

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.number().required(),
  favorite: Joi.boolean(),
});

const updateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const authSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...userSubscriptions)
    .required(),
});

const schemas = {
  addSchema,
  updateFavorite,
  authSchema,
  subscriptionSchema,
};

module.exports = { schemas };
