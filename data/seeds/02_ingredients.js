exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: "eggs"},
    { name: "water" }
  ]);
};
