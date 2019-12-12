
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Scrambled Eggs'},
        {id: 2, name: 'Boiled water'},
        {id: 3, name: 'Lemonade'}
      ]);
    });
};
