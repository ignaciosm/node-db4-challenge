const express = require('express');

const db = require("../data/db-config.js");
const Recipes = require('./recipes_model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

module.exports = router;