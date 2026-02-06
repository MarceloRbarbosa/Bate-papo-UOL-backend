import { Router } from "express";
import userController from "../controllers/userController";
import { validateSchema } from "../middlewares/validateSchemaMiddleware";
import { signUpSchema, signInSchema } from "../schemas/userSchema";

const userRouter = Router()
userRouter.post("/signup", validateSchema(signUpSchema), userController.signUp)
userRouter.post("/signin", validateSchema(signInSchema), userController.signIn)

export default userRouter