const express = require('express');
const AgriFertilizer = require('../models/AgriFertilizer');
const router =express.Router();

router.post('/admin/add' ,(req,res)=>{
    const newFertilizer=new AgriFertilizer({
        fertilizerName:req.body.fertilizerName,
        description:req.body.description,
        price:req.body.price,
        fertilizerImage:req.body.fertilizerImage
    });
    newFertilizer
    .save()
    .then(()=>res.json("New Fertilizer Added"))
    .catch((err)=>res.status(400).json(`Error:${err}`));
});


router.get('/',(req,res)=>{
    AgriFertilizer.find().exec((err,fertilizer)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFertilizer:fertilizer
        });
    });
})

router.get('/admin/:id',(req,res)=>{
    let fertilizerId=req.params.id;
    AgriFertilizer.findById(fertilizerId , (err,fertilizer)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            fertilizer
        });
    });
});

router.put('/admin/update/:id' ,(req,res)=>{
    AgriFertilizer.findByIdAndUpdate(req.params.id)
    .then((fertilizer )=> {
        fertilizer.fertilizerName=req.body.fertilizerName;
        fertilizer.description=req.body.description;
        fertilizer.price=req.body.price;
        fertilizer.fertilizerImage=req.body.fertilizerImage;
        
        fertilizer
            .save()
            .then(() => res.json("Fertilizer details UPDATED successfully"))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.delete('/admin/delete/:id',(req,res)=>{
    AgriFertilizer.findByIdAndRemove(req.params.id).exec((err,deletedfertilizer)=>{
        if(err) return res.status(400).json({
          message:"Fertilizer Delete unsuccesful",err
        });
        return res.json({
            message:"Fertilizer Delete succesful",deletedfertilizer
        });
    });
});




module.exports=router;