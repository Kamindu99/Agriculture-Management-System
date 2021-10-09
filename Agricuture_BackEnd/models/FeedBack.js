const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
 
    message:{
        type:String,
        required:true
    },
 
});
 
module.exports = mongoose.model('feedback',feedbackSchema);