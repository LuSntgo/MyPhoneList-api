import userSchema from "../schemas/userSchema.js";

export function validateUserSchema(req, res, next) {
  const user = req.body;

  const validation = userSchema.validate(user);

  if (validation.error) {
    return res.sendStatus(422);
  }
  next();
}
