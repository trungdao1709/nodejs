import express from "express";
import router from "./router/user.js";
const port =8888;

const app = express();
app.use(express.json());
app.use("/api",router);
app.listen(port,()=>{
    console.log(`chay dc tren ${port}`);
})