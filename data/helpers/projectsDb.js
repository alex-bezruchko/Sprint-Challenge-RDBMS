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
    // knex.select('*').from('users').join('accounts', {'accounts.id': 'users.account_id'})

    return db('projects').from('projects').join('actions', {'projects.id': 'actions.project_id'}).select('*')
    // return db('projects').where({id}).first();
}

function insert(project) {
    return db('projects').insert(project).then(ids => {
        return getProjectsById(ids[0])
    })
}