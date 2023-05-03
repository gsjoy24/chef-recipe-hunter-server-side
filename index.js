const express = require('express');
const cors = require('cors');
const app = express();

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const categories = require('./data/categories.json');

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
	res.send('server for ThaiZest is running');
});

app.get('/chefs', (req, res) => {
	res.send(chefs);
});

app.get('/categories', (req, res) => {
	res.send(categories);
});

app.get('/chef/:id', (req, res) => {
	const id = req.params.id;
	const foundedRecipes = recipes.filter((recipe) => recipe.id === id);
	res.send(foundedRecipes);
});

app.listen(port, () => {
	console.log(`running on port ${port}`);
});
