const conexao = require("../database/conexao")
class Treino {
  //  - index
  async index(req, res) {
    const dados = await conexao("treino")
    res.status(200).json(dados);
  }

  //  - create
  async create(req, res) {
    const {
      dataInicio,
      dataValidade,
      dataFinalizado,
      status
    } = req.body;

    const [id] = await conexao("treino").insert({
      dataInicio,
      dataValidade,
      dataFinalizado,
      status
    })
    res.status(200).json(id);
  }

  //  -  update
  async update(req, res) {
    const {
      id
    } = req.params
    const {
      dataInicio,
      dataValidade,
      dataFinalizado,
      status
    } = req.body

    const ret = await conexao("treino").where({
      id
    }).update({
      dataInicio,
      dataValidade,
      dataFinalizado,
      status
    })
    res.status(200).json(ret);

  }

  //  - select
  async select(req, res) {
    const {
      id
    } = req.params
    const dados = await conexao("treino").where({
      id
    })
    res.status(200).json(dados)

  }
}
module.exports = Treino;