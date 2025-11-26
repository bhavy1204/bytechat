import express from "express"
import { chats } from "./data/data.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("All ok");
})

app.get("/chats", (req, res) => {
    res.send(chats);
})

app.get("/chats/:id", (req, res) => {
    const {id} = req.params;
    const chat = chats.find(c=> c._id === id)
    res.send(chat);
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server up and running at PORT ${process.env.PORT}`);   
})

