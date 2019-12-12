
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, name: 'cups'},
        {id: 2, name: 'units'},
        {id: 3, name: 'tablespoons'}
      ]);
    });
};
