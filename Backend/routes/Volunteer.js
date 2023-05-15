import express from "express";
import Volunteer from "../models/Volunteer.js";
const router =express.Router();

// add
router.route("/add").post((req, res) => {
    const project = req.body.project;
    const venue = req.body.venue;
    const neartown = req.body.neartown;
    const date = req.body.date;
    const description = req.body.description;
    const name = req.body.name;
    const contactno = req.body.contactno;
  
    const newVolunteer = new Volunteer({
        project,
        venue,
        neartown,
        date,
        description,
        name,
        contactno,
    });
  
    newVolunteer
      .save()
      .then(() => {
        res.json("Volunteer Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });

//get
router.get('/', async(req,res)=>{

    await Volunteer.find().then((Volunteer)=>{
        res.json(Volunteer)
    }).catch((err)=>{
        console.log(err)
    })

});

//Update
router.put("/update/:id", async(req,res) =>{
    let volunteerId = req.params.id;
  
    const update = await Volunteer.findByIdAndUpdate(volunteerId, req.body).then(()=>{
        res.status(200).send({status:"Volunteer details updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })

});

//Delete
router.delete('/delete/:id', async(req,res)=>{
    let volunteerId = req.params.id;

    await Volunteer.findByIdAndDelete(volunteerId).then(()=>{
        res.status(200).send({status:"Volunteer details deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete business", errpr:err.message});
    })

});

//Get a specific business record
router.get('/get/:id', async(req,res) =>{
    let volunteerId = req.params.id;

    const volunteer = await Volunteer.findById(volunteerId).then((volunteer)=>{
        res.status(200).send({status:"User fetched", volunteer});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message});
    })
});

export default router;