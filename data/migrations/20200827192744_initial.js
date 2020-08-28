exports.up = async function(knex) {
   await knex.schema.createTable("ingredients", (table) => {
       table.increments("id")
       table.text("ingr_name").notNull().unique()
       
   })
   await knex.schema.createTable("recipes", (table) => {
       table.increments("id")
       table.text("recipe_name").notNull().unique()
       
   })
   await knex.schema.createTable("recipe_ingredients", (table) => {
       
       table.integer("recipe_id").references("id").inTable("recipes")
       table.integer("ingredients_id").references("id").inTable("ingredients")
       table.float("quantity")

       table.primary(["recipe_id", "ingredients_id"])
   })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
