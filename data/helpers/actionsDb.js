const db = require('../dbConfig');

module.exports = {
    getAllActions,
    getActionsById,
    insert
}

function getAllActions() {
    return db('actions')
}
function getActionsById(id) {
    return db('actions').where({id}).first();
}

function insert(action) {
    return db('actions').insert(action).then(ids => {
        return getActionsById(ids[0])
    })
}