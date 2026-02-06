import express, {json}  from "express"
import cors from "cors"
import errorHandlerMiddleware from "./middlewares/errorMiddleware"
import routers from "./routes/indexRouters"

import * as dotenv from "dotenv";
dotenv.config()

const app = express();

app.use(cors());
app.use(json());
app.use(routers);
app.use(errorHandlerMiddleware);

export default app;