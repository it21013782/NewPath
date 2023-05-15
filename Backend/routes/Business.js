import express from "express";
import Business from "../models/Business.js";
const router =express.Router();


//add donation
router.route("/add").post((req, res) => {
    const busname = req.body.busname;
    const owner = req.body.owner;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;
    const bustype = req.body.bustype;
    const revenue = req.body.revenue;
    const busDetails = req.body.busDetails;
    const finance = req.body.finance;
  
    const newBusiness = new Business({
        busname,
        owner,
        address,
        email,
        phone,
        bustype,
        revenue,
        busDetails,
        finance,
    });
  
    newBusiness
      .save()
      .then(() => {
        res.json("Business Added");
      })
      .catch((err) => {
        console.log(err);
      });
  });


//get
router.get('/', async(req,res)=>{

    await Business.find().then((Business)=>{
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

export default router;