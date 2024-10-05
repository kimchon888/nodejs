import express from "express";
const rootRouter = express.Router();

app.get("/", (req, res) => {
    res.send(html);
});

rootRouter.get("/", (req,res) => {
    res.send(html);
})

rootRouter.get("/contact", (req, res) => {
    res.send("<h1> Hello Contact Page");
})

rootRouter.get("/about", (req, res) => {
    res.send("<h1> Hello About Page");
})


export default rootRouter;