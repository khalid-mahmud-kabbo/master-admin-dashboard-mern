const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema(
    {

        projectholdername:{
            type: String,
            required: true
        },

        phone:{
            type: Number,
            required: true
        },
        
        email:{
            type: String,
            required: true
        },

        nidnumber:{
            type: String
        },

        address:{
            type: String,
            required: true
        },

        projectname:{
            type: String,
            required: true
        },

        description:{
            type: String,
            required: true
        },

        technology:{
            type: String,
            required: true
        },

        deadline:{
            type: String,
            required: true
        },

        serverdetails:{
            type: String,
        }
    }
)

const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;