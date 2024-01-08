const mongoose = require('mongoose')

const familySchema = new mongoose.Schema({
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    children:{
        type:Array
    },
    fatherImage:{
        type:String
    },
    motherImage:{
        type:String
    },
    childrenImages:{
        type: Array
    }
    
},{timestamps:true})

const family = mongoose.model("family",familySchema)

module.exports = family