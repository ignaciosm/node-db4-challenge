
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, recipe_id: 1, position: 1, description: 'mix in a bowl'},
        {id: 2, recipe_id: 1, position: 2, description: 'pour in a frying pan'},
        {id: 3, recipe_id: 2, position: 1, description: 'pour in a teapot'},
        {id: 4, recipe_id: 3, position: 1, description: 'mix in a pitcher'}
      ]);
    });
};
