exports.up = function (knex) {
  return knex.schema.createTable("exercicio", (table) => {
    table.increments('id')
    table.string('nome');
    table.string('descricao');
    table.date('created_at');
    table.date('updated_at');
    table.integer('id_grupoMuscular');
    table.foreign('id_grupoMuscular').references('grupoMuscular.id')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('exercicio');
};