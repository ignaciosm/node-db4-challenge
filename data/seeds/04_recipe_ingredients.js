exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2, unit_id: 2 },
    { recipe_id: 2, ingredient_id: 2, quantity: 4, unit_id: 1 }
  ]);
};
