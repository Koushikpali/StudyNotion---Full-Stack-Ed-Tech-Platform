const mongoose = require('mongoose');

const courseProgressSchema = new mongoose.Schema({
  
courseID:{
    type:mongoose.Schema.type.objectId,
    ref:"course"
},
completedVideos:[
    {
        type:mongoose.SchemaTypes.ObjectId,
        ref:"subsection",
    }
]

});

const CourseProgress = mongoose.model('CourseProgress', courseProgressSchema);

module.exports = CourseProgress;