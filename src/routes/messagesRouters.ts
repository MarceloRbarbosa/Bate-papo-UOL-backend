import { Router } from "express"
import messagesController from "../controllers/messagesController"
import { authenticateToken } from "../middlewares/tokenMiddleware"
import { validateSchema } from "../middlewares/validateSchemaMiddleware";
import { createMessageSchema } from "../schemas/messagesSchema";

const messageRouter = Router();

messageRouter.post("/chat", authenticateToken,validateSchema(createMessageSchema), messagesController.postMessage)
messageRouter.get("/chat", authenticateToken, messagesController.getMessages)

export default messageRouter