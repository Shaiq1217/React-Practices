/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.increments("id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.boolean("isActive").notNullable().defaultTo(true);
    table.date("createdDate").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
