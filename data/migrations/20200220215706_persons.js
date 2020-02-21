
exports.up = function(knex) {
  return ( knex.schema.createTable('persons', tbl => {
      tbl.increments();
      tbl.string('person', 55)
        .notNullable()
        .unique();
      tbl.boolean('swole')
        .notNullable();
  }))
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('persons');
};
