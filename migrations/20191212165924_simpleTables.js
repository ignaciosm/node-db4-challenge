
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.string('source', 128);
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
  })
  .createTable('units', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
  })
  .createTable('instructions', tbl => {
    tbl.increments();
    tbl.integer('position').notNullable();
    tbl.text('description', 500).notNullable();
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.increments();
    tbl.float('quantity').notNullable();
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
    tbl.integer('unit_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('units');
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');      
  })
  .createTable('instruction_ingredients', tbl => {
    tbl.increments();
    tbl.integer('instruction_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('instructions');
    tbl.integer('recipe_ingredient_id')
      .unsigned()
      .references('id')
      .inTable('recipe_ingredients');      
  })
  
};

exports.down = function(knex) {
  
};
