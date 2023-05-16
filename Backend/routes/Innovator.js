const express = require("express");
const Innovator = require("../models/Innovator");
const Innovators = require("../models/Innovator");
const router =express.Router();

// add
router.post('/add', async(req,res) => {
    let newInnovator = Innovators(req.body);

    await newInnovator.save().then(()=>{
        res.json("Innovator details added successfully")
    }).catch((err)=>{
        console.log(err);
    });

});

router.get('/', async(req,res)=>{

    await Innovators.find().then((Innovator)=>{
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

//to read the business record
router.get('/get/:id', async(req,res) =>{
    let innovatorId = req.params.id;

    const innovator = await Innovator.findById(innovatorId).then((innovator)=>{
        res.status(200).send({status:"Innovator details fetched", innovator});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message});
    })
});

module.exports = router;