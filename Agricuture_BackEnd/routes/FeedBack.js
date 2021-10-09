const express = require('express');
const FeedBack = require('../models/FeedBack');
 
const router =express.Router();
 
router.post('/add',(req,res)=>{
    let newFeedBack=new FeedBack(req.body);
 
    newFeedBack.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
return res.status(200).json({
    success:"Message added successfully"
});
    });
});
 
router.get('/',(req,res)=>{
    FeedBack.find().exec((err,FeedBack)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingFeedBack:FeedBack
        });
    });
})
 
router.get('/:id',(req,res)=>{
    let FeedBackId=req.params.id;
    FeedBack.findById(FeedBackId , (err,FeedBack)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            FeedBack
        });
    });
});


module.exports=router;