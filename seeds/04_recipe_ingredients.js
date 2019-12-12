
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1, quantity: 2, unit_id: 2 },
        {id: 2, recipe_id: 1, ingredient_id: 5, quantity: 0.5, unit_id: 3 },
        {id: 3, recipe_id: 2, ingredient_id: 2, quantity: 4, unit_id: 1 },
        {id: 4, recipe_id: 3, ingredient_id: 2, quantity: 4, unit_id: 1 },
        {id: 5, recipe_id: 3, ingredient_id: 3, quantity: 3, unit_id: 2 },
        {id: 6, recipe_id: 3, ingredient_id: 4, quantity: 2, unit_id: 3 }
      ]);
    });
};
