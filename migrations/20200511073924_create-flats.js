exports.up = (knex) => {
  return knex.schema.createTable('flats', (table) => {
    table.increments();
    table.string('title');
    table.integer('price');
    table.integer('floorArea');
    table.string('country');
    table.integer('zip');
    table.string('city');
    table.string('street');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('flats');
};
