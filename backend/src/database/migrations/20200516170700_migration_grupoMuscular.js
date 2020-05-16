exports.up = function (knex) {
  return knex.schema.createTable("grupoMuscular", (table) => {
    table.increments("id");
    table.string("nome");
    table.string("descricao");
    table.date('created_at');
    table.date('updated_at');
  })
};
exports.down = function (knex) {
  return knex.schema.dropTable("grupoMuscular")
};