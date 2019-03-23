
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('actions', table => {
        table.increments()
        table.text('action_name').notNullable().unique()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};
