import express from "express";
import Innovator from"../models/Innovator.js";
const router =express.Router();


//add business
router.route("/add").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const company = req.body.company;
    const title = req.body.title;
    const summary = req.body.summary;
    const problem = req.body.problem;
    const solution = req.body.solution;
    const audience = req.body.audience;
    const usp = req.body.usp;
    const curentstage = req.body.curentstage;
    const awards = req.body.awards;
  
    const newInnovator = new Innovator({
        name,
        email,
        phone,
        company,
        title,
        summary,
        problem,
        solution,
        audience,
        usp,
        curentstage,
        awards
    });
  
    newInnovator
      .save()
      .then(() => {
        res.json("Innovator Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });


router.get('/', async(req,res)=>{

    await Innovator.find().then((Innovator)=>{
        res.json(Innovator)
    }).catch((err)=>{
        console.log(err)
    })

});

//Update
router.put("/update/:id", async(req,res) =>{
    let innovatorId = req.params.id;
  
    const update = await Innovator.findByIdAndUpdate(innovatorId, req.body).then(()=>{
        res.status(200).send({status:"Innovator details updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })

});

//Delete
router.delete('/delete/:id', async(req,res)=>{
    let innovatorId = req.params.id;

    await Innovator.findByIdAndDelete(innovatorId).then(()=>{
        res.status(200).send({status:"Innovator details deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete innovator details", errpr:err.message});
    })

});

//Get a specific business record
router.get('/get/:id', async(req,res) =>{
    let innovatorId = req.params.id;

    const innovator = await Innovator.findById(innovatorId).then((innovator)=>{
        res.status(200).send({status:"Innovator details fetched", innovator});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message});
    })
});

export default router;