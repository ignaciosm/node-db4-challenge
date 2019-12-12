exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { description: "mix in a bowl", position: 1, recipe_id: 1 },
    { description: "pour in a pot", position: 2, recipe_id: 1 },
    { description: "pour in the teapot", position: 1, recipe_id: 2 },
  ]);
};
