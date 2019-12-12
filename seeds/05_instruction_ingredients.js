
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instruction_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruction_ingredients').insert([
        {id: 1, instruction_id: 1, recipe_ingredient_id: 1 },
        {id: 2, instruction_id: 2, recipe_ingredient_id: 1 },
        {id: 3, instruction_id: 3, recipe_ingredient_id: 3 },
        {id: 4, instruction_id: 4, recipe_ingredient_id: 4 },
        {id: 5, instruction_id: 4, recipe_ingredient_id: 5 },
        {id: 6, instruction_id: 4, recipe_ingredient_id: 6 },
      ]);
    });
};
