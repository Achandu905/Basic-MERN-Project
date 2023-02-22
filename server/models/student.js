import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    regNo:Number,
    studentName:String,
    grade:String,
    section:{
        type:String,
        default:'A'
    }
   
});

export const Student=mongoose.model('Student',studentSchema);





