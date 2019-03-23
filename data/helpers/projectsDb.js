const db = require('../dbConfig');

module.exports = {
    getAllProjects,
    getProjectsById,
    insert
}

function getAllProjects() {
    return db('projects')
}
function getProjectsById(id) {
    return db('projects').where({id}).first();
}

function insert(action) {
    return db('projects').insert(project).then(ids => {
        return getProjectsById(ids[0])
    })
}