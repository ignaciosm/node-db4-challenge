exports.seed = function(knex, Promise) {
  return knex('instruction_ingredients').insert([
    { instruction_id: 1, recipe_ingredient_id: 1 },
    { instruction_id: 2, recipe_ingredient_id: 1 },
    { instruction_id: 3, recipe_ingredient_id: 2 }
  ]);
};
