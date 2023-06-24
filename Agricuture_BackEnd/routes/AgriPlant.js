const express = require('express');
const AgriPlant = require('../models/AgriPlant');
const router =express.Router();

router.post('/admin/add' ,(req,res)=>{
    const newPlant=new AgriPlant({
        plantName:req.body.plantName,
        description:req.body.description,
        price:req.body.price,
        plantImage:req.body.plantImage,
    });
    newPlant
    .save()
    .then(()=>res.json("New Plant Added"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


router.get('/',(req,res)=>{
    AgriPlant.find().exec((err,plant)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPlant:plant
        });
    });
})

router.get('/admin/:id',(req,res)=>{
    let plantId=req.params.id;
    AgriPlant.findById(plantId , (err,plant)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            plant
        });
    });
});

router.put('/admin/update/:id',(req,res)=>{
    AgriPlant.findByIdAndUpdate(req.params.id)
    .then((plant )=> {
        plant.plantName=req.body.plantName;
        plant.description=req.body.description;
        plant.price=req.body.price;
        plant.plantImage=req.body.plantImage;

        plant
            .save()
            .then(() => res.json("Plant details UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.delete('/admin/delete/:id',(req,res)=>{
    AgriPlant.findByIdAndRemove(req.params.id).exec((err,deletedplant)=>{
        if(err) return res.status(400).json({
          message:"Plant Delete unsuccesful",err
        });
        return res.json({
            message:"Plant Delete succesful",deletedplant
        });
    });
});




module.exports=router;