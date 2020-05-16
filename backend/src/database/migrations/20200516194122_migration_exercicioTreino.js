
exports.up = function(knex) {
  return knex.schema.createTable('exercicioTreino', (table) => {
    table.increments('id');
    table.integer('treino_id').notNullable();
    table.integer('exercicio_id').notNullable();
    table.integer('serie')
    table.integer('repeticao')

    table.foreign('treino_id').references('treino.id')
    table.foreign('exercicio_id').references('exercicio.id')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('exercicioTreino')  
};

