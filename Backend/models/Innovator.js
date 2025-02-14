import mongoose from 'mongoose';

const innovatorSchema = new mongoose.Schema({

    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required: true
    },
    phone:{
        type : Number,
        required: true
    },
    company:{
        type : String,
        required: true
    },
    title:{
        type : String,
        required: true
    },
    summary:{
        type : String,
        required: true
    },
    problem:{
        type : String,
        required: true
    },
    solution:{
        type : String,
        required: true
    },
    audience:{
        type : String,
        required: true
    },
    usp:{
        type : String,
        required: true 
    },
    curentstage:{
        type : String,
        required: true
    },
    awards:{
        type : String,
        required: true
    }
});

const Innovator = mongoose.model("Innovator", innovatorSchema);

export default Innovator;