import express from 'express';
import morgan from 'morgan';
import rootRouter from './router/root.js';

const app = express();
app.use(morgan("combined"));
app.set('view engine', 'ejs')
app.set('views', './views')
app.get("/",(req,res)=>{
    res.render("index");
});

app.use("/",rootRouter);

app.listen(3000,()=>{
    console.log("sever started");
});