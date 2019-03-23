
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('actions', table => {
        table.increments()
        table.text('name').notNullable().unique()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
