const mongo=require("mongoose")

const profile=mongo.Schema(
    {gender:{
        type:String,

    },
    dateofbirth:{
        type:String
    },
    about:{
         type:string, 
         trim:true,
    },
    contactNumber:{
        type:Number,
        trim:true,
    }

    }
)
module.exports=mongoose.model("profile",profileSchema)