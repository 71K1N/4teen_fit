exports.up = function (knex) {
  return knex.schema.createTable('treino', (table) => {
    table.increments('id');
    table.date('dataInicio');
    table.date('dataValidade');
    table.date('dataFinalizado');
    table.integer('status').notNullable();
    table.date('updated_at');
    table.date('created_at');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('treino')
};