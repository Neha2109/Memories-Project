import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


import postRoutes from './routes/posts.js';

const app=express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts',postRoutes);

app.get('/',(req,res)=>{
    res.send("Hello to memories API");
})

//cloud atlas of mongodb

// const CONNECTION_URL='mongodb+srv://hemant935:sb1586849*@cluster0.go6qxwq.mongodb.net/?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true})
.then(()=>app.listen(PORT,()=>console.log("Server running on port:"+PORT)))
.catch((error)=>console.log(error.message));

export default app;
