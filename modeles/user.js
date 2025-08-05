const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:string 
        ,required:true,

    },
    password:{
        type:string,
        required:true
    },
    accountType:{
        type:string,
        enum:["instructor","user","admin"]
        ,required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"profile",
    },
    courses:{

    type:mongoose.Schema.Types.objectId,
    ref:"course",

    },
    images:{
        type:string,
        required:true,
    },
    courseProgess:[
        {type:mongoose,
            ref:"CourseProgress"
        }
    ]


})
module.exports=mongoose.model("User",userschema)