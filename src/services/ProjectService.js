const ProjectModel = require('../model/ProjectModel');

const CreateProject = async(req) =>{

    const data = req.body;

    try {
    const projectdata = new ProjectModel(data);
    const savedata = await projectdata.save();

    return { success: true, error: null, data: savedata };
        
    } catch (error) {
		console.log("Error to create Project:::", error)
	}


}


module.exports = {
    CreateProject
}