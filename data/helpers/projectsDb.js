const db = require('../dbConfig');

module.exports = {
    getAllProjects,
    getProjectsById,
    insert,
}

function getAllProjects() {
    return db('projects')
}
function getProjectsById(id) {
    const query = db('projects').where({id}).first()
    return query;  
} 

function insert(project) {
    return db('projects').insert(project).then(ids => {
        return getProjectsById(ids[0])
    })
}