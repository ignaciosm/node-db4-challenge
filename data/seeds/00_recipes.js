exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: "Scambled eggs", source: 'mom' },
    { name: "Boil water", species_id: 'dad' }
  ]);
};
