const mongoose = require('mongoose');
const agriSeedSchema = new mongoose.Schema ({
    seedName:{
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
    seedImage:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('agriseed',agriSeedSchema);











