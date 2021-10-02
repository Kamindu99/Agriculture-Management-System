const mongoose = require('mongoose');
const agriPlantSchema = new mongoose.Schema ({
    plantName:{
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
    plantImage:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('agriplant',agriPlantSchema);











