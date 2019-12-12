
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'eggs'},
        {id: 2, name: 'water'},
        {id: 3, name: 'lemons'},
        {id: 4, name: 'sugar'},
        {id: 5, name: 'salt'}
      ]);
    });
};
