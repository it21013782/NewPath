const express = require("express");
const Business = require("../models/Business");
const Businesses = require("../models/Business");
const router =express.Router();


// add
router.post('/add', async(req,res) => {
    let newBusiness = Businesses(req.body);

    await newBusiness.save().then(()=>{
        res.json("Business added successfully")
    }).catch((err)=>{
        console.log(err);
    });

});

//get
router.get('/', async(req,res)=>{

    await Businesses.find().then((Business)=>{
        res.json(Business)
    }).catch((err)=>{
        console.log(err)
    })

});

//Update
router.put("/update/:id", async(req,res) =>{
    let busiId = req.params.id;
  
    const update = await Business.findByIdAndUpdate(busiId, req.body).then(()=>{
        res.status(200).send({status:"Business updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })

});

//Delete
router.delete('/delete/:id', async(req,res)=>{
    let busiId = req.params.id;

    await Business.findByIdAndDelete(busiId).then(()=>{
        res.status(200).send({status:"Business deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete business", errpr:err.message});
    })

});

//Get a specific business record
router.get('/get/:id', async(req,res) =>{
    let businessId = req.params.id;

    const business = await Business.findById(businessId).then((business)=>{
        res.status(200).send({status:"User fetched", business});
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user",error:err.message});
    })
});

module.exports = router;