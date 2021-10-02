const express = require('express');
const AgriPlant = require('../models/AgriPlant');
const multer = require("multer")
const router =express.Router();

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../Agricuture_FrontEnd/public/uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
})

const upload=multer({storage:storage});


router.post('/admin/add', upload.single("plantImage") ,(req,res)=>{
    const newPlant=new AgriPlant({
        plantName:req.body.plantName,
        description:req.body.description,
        price:req.body.price,
        plantImage:req.file.originalname,
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

router.put('/admin/update/:id' , upload.single("plantImage"),(req,res)=>{
    AgriPlant.findByIdAndUpdate(req.params.id)
    .then((plant )=> {
        plant.plantName=req.body.plantName;
        plant.description=req.body.description;
        plant.price=req.body.price;
        

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