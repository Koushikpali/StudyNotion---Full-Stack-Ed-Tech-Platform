const mongoose = require('mongoose');
const section=mongoose.Schema(
    {
        sectionName:{
            type:String,
        }
        ,subsection:[
            {type:mongoose.schematypews.objectId,
            required:true,
            ref:"subsection"}
        ]
 
    }
)

module.exports = mongoose.model('section', section);