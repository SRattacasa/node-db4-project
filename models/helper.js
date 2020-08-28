const db = require("../data/config")

function getRecipes() {
	return db("recipes as r")
		.select("*")
}

function getShoppingList(recipe_id) {
	return db("recipe_ingredients as ri")
		.where("ri.id", id)
		.join("ingredients as i", "i.id", "ri.ingredients_id")
		.join("recipes as r", "r.id", "ri.recipes_id")

}
function getInstructions(recipe_id) {
	return db("recipe_ingredients as ri")
		.where("ri.id", id)
		.join("ingredients as i", "i.id", "ri.ingredients_id")
		.join("recipes as r", "r.id", "ri.recipes_id")

}

module.exports = {
	getRecipes,
    getShoppingList,
    getInstructions
}