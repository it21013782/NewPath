import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({

    project:{
        type : String,
        required : true
    },
    venue:{
        type : String,
        required: true
    },
    neartown:{
        type : String,
        required: true
    },
    date:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true
    },
    name:{
        type : String,
        required: true
    },
    contactno:{
        type : String,
        required: true
    },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;