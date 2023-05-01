const express = require('express');
const cors = require('cors');
const app = express();

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
	res.send('server for ThaiZest is running');
});

app.listen(port, () => {
	console.log(`running on port ${port}`);
});
