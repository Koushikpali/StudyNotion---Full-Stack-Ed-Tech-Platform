const mongoose=require("mongoose");
const courseSchema = new mongoose.Schema({
    courseName:{
        type:string
    }
    ,cousredescription:{
        type:String,

    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId
        ,ref:user

    },
    whatyouwilllearn:{
    type:string
    
    },
    coursecontent:{
        type:mongoose.Schema.Types.ObjectId
        ,ref:"section"

    },
    ratingandreviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratingandreview",
        }
    ],
    prices:{
        type:Number,

    },
    thumbnail:{
        type:String
    },
    tag:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'tag'
    },
    studentsEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        required:'true',
        ref:'user'
    }]

});

module.exports = mongoose.model('Course', courseSchema);