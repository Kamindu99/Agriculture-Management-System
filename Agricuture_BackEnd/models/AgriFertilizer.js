const mongoose = require('mongoose');
const agriFertilizerSchema = new mongoose.Schema ({
    fertilizerName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    fertilizerImage:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('agrifertilizer',agriFertilizerSchema);











