import express from "express";
const rootRouter = express.Router();

const workeExperience = [
    {
        name:"front End Deverloper",
        start_date: "Jan 2015",
        end_date:"Jan 2015",
        description:
        " Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
    },
    {
        name:"Web Developer ",
        start_date: "Mar 2012",
        end_date:"Dec 2014",
        description:
        " Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
    },
    {
        name:"Graphic Designer",
        start_date: "Jun 2010",
        end_date:"Mar 2012",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },

]

let html = 

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