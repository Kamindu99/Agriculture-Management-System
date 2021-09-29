const mongoose = require('mongoose');
const agriEquipmentSchema = new mongoose.Schema ({
    equipmentName:{
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
    equipmentImage:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('agriequipment',agriEquipmentSchema);