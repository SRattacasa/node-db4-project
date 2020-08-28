exports.seed = async function(knex) {
	await knex("ingredients").insert([   
		{ ingr_name: "Garlic" },
		{ ingr_name: "Ground Beef"},
	])
}