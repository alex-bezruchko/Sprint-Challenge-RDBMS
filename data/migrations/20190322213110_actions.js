
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('actions', table => {
        table.increments();
        table.text('action_description').notNullable();
        table.text('action_notes').notNullable();
        table.boolean('completed')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
