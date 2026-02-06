import * as Joi from "joi"

export const createMessageSchema = Joi.object({
  to: Joi.string().allow("").optional(),
  text: Joi.string().min(1).required(),
  type: Joi.string().valid("message", "private_message").required(),
});