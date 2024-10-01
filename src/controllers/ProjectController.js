const { CreateProject } = require('../services/ProjectService');

const AddProject = async (req, res) => {
	const result = await CreateProject(req);
	return res.json(result);
};




module.exports = {
    AddProject
}