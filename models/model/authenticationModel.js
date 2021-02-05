const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSignUp = new Schema({
    name:{type:String},
    Mobile_number:{type:Number},
    email:{type:String},
    password:{type:String},
}, {timestamps : true})

const adminSignUpData = mongoose.model("adminLoginData", adminSignUp);
module.exports = adminSignUpData;