const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    }
},{timestamps:true})
module.exports = mongoose.model('employeeData',employeeSchema);