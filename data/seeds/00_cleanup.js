exports.seed = async function(knex) {
	await knex("ingredients").truncate()
	await knex("recipes").truncate()
	await knex("recipe_ingredients").truncate()
	
}