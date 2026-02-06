import { Router } from "express";
import userRouter from "./usersRouter";
import healthRouter from "./healthRouters";


const routers = Router();
routers.use(healthRouter)
routers.use("/auth", userRouter)

export default routers;