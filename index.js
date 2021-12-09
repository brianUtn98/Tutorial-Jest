import express from "express";
import mongoose from "mongoose";

import router from "./routes/router.js"
const app = express();

mongoose.Promise = global.Promise;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(router);

mongoose.connect("mongodb+srv://brianUtn98:ang3l_98@cluster0.u40ir.mongodb.net/tallerTesting?retryWrites=true&w=majority");

const server = app.listen(4000,"localhost",()=>{
    console.log(`Servidor funcionando en localhost:4000`);
});

export {app,server};