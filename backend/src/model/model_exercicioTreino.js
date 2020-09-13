const conexao = require("../database/conexao")
class ExercicioTreino {
  //  - index
  async index(req, res) {
    const dados = await conexao("exercicioTreino")
    res.status(200).json(dados);
  }

  //  - create
  async create(req, res) {
    const {
      treino_id,
      exercicio_id,
      serie,
      repeticao
    } = req.body;

    const [id] = await conexao("exercicioTreino").insert({
      treino_id,
      exercicio_id,
      serie,
      repeticao
    })
    res.status(200).json(id);
  }

  //  -  update
  async update(req, res) {
    const {
      id
    } = req.params
    const {
      treino_id,
      exercicio_id,
      serie,
      repeticao
    } = req.body

    const ret = await conexao("exercicioTreino").where({
      id
    }).update({
      treino_id,
      exercicio_id,
      serie,
      repeticao
    })
    res.status(200).json(ret);

  }

  //  - select
  async select(req, res) {
    const {
      id
    } = req.params
    const dados = await conexao("exercicioTreino").where({
      id
    })
    res.status(200).json(dados)
  }
}
module.exports = ExercicioTreino;