exports.seed = async function(knex) {
	await knex("recipes").insert([   
		{ recipe_name: "Garlic Beef" },
		{ recipe_name: "Ground Beef and Garlic"},
	])
}