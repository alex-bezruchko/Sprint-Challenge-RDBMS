
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('actions', table => {
        table.increments();
        table.text('description').notNullable();
        table.text('notes').notNullable();
        table.boolean('completed')
        table
            .integer('project_id')
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
