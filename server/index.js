import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./router/auth.js";
import loginRouter from "./router/login.js";
import {config} from "./config.js";
import {sequelize} from "./db/database.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/auth", authRouter);
app.use("/login", loginRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.log(error);
    res.sendStatus(500);
});

sequelize.sync().then(() => {
    app.listen(config.host.port);
});