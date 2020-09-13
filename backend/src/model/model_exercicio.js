const conexao = require("../database/conexao")
class Exercicio {
  //  - index
  async index(req, res) {
    const dados = await conexao("exercicio")
    res.status(200).json(dados);
  }

  //  - create
  async create(req, res) {
    const {
      nome,
      descricao,
      id_grupoMuscular
    } = req.body;

    const [id] = await conexao("exercicio").insert({
      nome,
      descricao,
      id_grupoMuscular
    })
    res.status(200).json(id);
  }

  //  -  update
  async update(req, res) {
    const {
      id
    } = req.params
    const {
      nome,
      descricao,
      id_grupoMuscular
    } = req.body

    const ret = await conexao("exercicio").where({
      id
    }).update({
      nome,
      descricao,
      id_grupoMuscular
    })
    res.status(200).json(ret);

  }

  //  - select
  async select(req, res) {
    const {
      id
    } = req.params
    const dados = await conexao("exercicio").where({
      id
    })
    res.status(200).json(dados)
  }
  // - remove
  async remove(req, res) {
    const {
      id
    } = req.params
    const removed = await conexao("exercicio").where('id', id).del()
    res.status(200).json({
      removed,
      "mensagem": removed ? "removido" : "item nao removido"
    })
  }
}
module.exports = Exercicio;