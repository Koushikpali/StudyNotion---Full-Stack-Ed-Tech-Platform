const mongoose = require('mongoose');
const subsection=mongoose.Schema(
    {
        title:{
            type:string
        },
        timeduration:{type:string

        },
        description:{
            type:string,
        },
        videourl:{
            type:string, 
        }

    }
)

module.exports = mongoose.model('Subsection', subsection);