const express = require('express');
const Agrochemical = require('../models/AgroChemical');
const router =express.Router();

router.post('/admin/add',(req,res)=>{
    const newAgrochemical=new Agrochemical({
        agrochemicalName:req.body.agrochemicalName,
        description:req.body.description,
        price:req.body.price,
        agrochemicalImage:req.body.agrochemicalImage
    });
    newAgrochemical
    .save()
    .then(()=>res.json("New Agrochemical Added"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


router.get('/',(req,res)=>{
    Agrochemical.find().exec((err,agrochemical)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingAgrochemical:agrochemical
        });
    });
})

router.get('/admin/:id',(req,res)=>{
    let agrochemicalId=req.params.id;
    Agrochemical.findById(agrochemicalId , (err,agrochemical)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            agrochemical
        });
    });
});

router.put('/admin/update/:id' ,(req,res)=>{
    Agrochemical.findByIdAndUpdate(req.params.id)
    .then((agrochemical )=> {
        agrochemical.agrochemicalName=req.body.agrochemicalName;
        agrochemical.description=req.body.description;
        agrochemical.price=req.body.price;
        agrochemical.agrochemicalImage=req.body.agrochemicalImage;

        agrochemical
            .save()
            .then(() => res.json("Agrochemical details UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.delete('/admin/delete/:id',(req,res)=>{
    Agrochemical.findByIdAndRemove(req.params.id).exec((err,deletedAgrochemical)=>{
        if(err) return res.status(400).json({
          message:"Agrochemical Delete unsuccesful",err
        });
        return res.json({
            message:"Agrochemical Delete succesful",deletedAgrochemical
        });
    });
});




module.exports=router;