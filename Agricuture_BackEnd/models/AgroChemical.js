const mongoose = require('mongoose');
const AgriagrochemicalSchema = new mongoose.Schema ({
    agrochemicalName:{
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
    agrochemicalImage:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('agrochemical',AgriagrochemicalSchema);