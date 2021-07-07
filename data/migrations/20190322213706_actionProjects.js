
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actionProjects', table => {
        table.increments();
        table
            .integer('action_id')
            .references('id')
            .inTable('actions')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
       table
            .integer('project_id')
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actionProjects')
};
