const express = require('express');
const Agrochemical = require('../models/AgroChemical');
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


router.post('/admin/add', upload.single("agrochemicalImage") ,(req,res)=>{
    const newAgrochemical=new Agrochemical({
        agrochemicalName:req.body.agrochemicalName,
        description:req.body.description,
        price:req.body.price,
        agrochemicalImage:req.file.originalname,
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

router.put('/admin/update/:id' , upload.single("agrochemicalImage"),(req,res)=>{
    Agrochemical.findByIdAndUpdate(req.params.id)
    .then((agrochemical )=> {
        agrochemical.agrochemicalName=req.body.agrochemicalName;
        agrochemical.description=req.body.description;
        agrochemical.price=req.body.price;
        

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