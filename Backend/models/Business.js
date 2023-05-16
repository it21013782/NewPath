const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({

    busname:{
        type : String,
        required : true
    },
    owner:{
        type : String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    bustype:{
        type: String,
        required: true
    },
    revenue:{
        type: Number,
        required: true
    },
    busDetails:{
        type: String,
        required: true
    },
    finance:{
        type: String,
        required: true
    },
});

module.exports=mongoose.model('Business',businessSchema);