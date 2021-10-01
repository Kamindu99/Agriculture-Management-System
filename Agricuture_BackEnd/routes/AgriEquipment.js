const express = require('express');
const AgriEquipment = require('../models/AgriEquipment');
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


router.post('/admin/add', upload.single("equipmentImage") ,(req,res)=>{
    const newEquipment=new AgriEquipment({
        equipmentName:req.body.equipmentName,
        description:req.body.description,
        price:req.body.price,
        equipmentImage:req.file.originalname,
    });
    newEquipment
    .save()
    .then(()=>res.json("New Equipment Added"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


router.get('/',(req,res)=>{
    AgriEquipment.find().exec((err,equipment)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingEquipment:equipment
        });
    });
})

router.get('/admin/:id',(req,res)=>{
    let eqId=req.params.id;
    AgriEquipment.findById(eqId , (err,equipment)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            equipment
        });
    });
});

router.put('/admin/update/:id' , upload.single("equipmentImage"),(req,res)=>{
    AgriEquipment.findByIdAndUpdate(req.params.id)
    .then((equipment )=> {
        equipment.equipmentName=req.body.equipmentName;
        equipment.description=req.body.description;
        equipment.price=req.body.price;
        

        equipment
            .save()
            .then(() => res.json("Equipment details UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.delete('/admin/delete/:id',(req,res)=>{
    AgriEquipment.findByIdAndRemove(req.params.id).exec((err,deletedeq)=>{
        if(err) return res.status(400).json({
          message:"Equipment Delete unsuccesful",err
        });
        return res.json({
            message:"Equipment Delete succesful",deletedeq
        });
    });
});




module.exports=router;