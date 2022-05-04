import 'dotenv/config'
import express from "express";
import Mail from './controller/Mail';
import cors from 'cors'


const port = process.env.PORT || 5000;
const mail = new Mail();
const app = express();

app.use(cors())

app.use(express.json());
app.post("/", mail.send);
app.get("/", (req, res)=> res.send("Hello send mail"));

app.listen(port, () => console.log(`Running on port ${port}`))