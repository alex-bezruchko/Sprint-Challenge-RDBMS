
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', table => {
        table.increments();
        table.text('project_name')
        table.text('project_description')
        table.boolean('completed')
        table
            .integer('actionProjectsId ')
            .references('id')
            .inTable('actionProjects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};
