exports.seed = function(knex, Promise) {
  return knex('units').insert([
    { name: "cups"},
    { name: "units" }
  ]);
};
