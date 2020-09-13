const conexao = require("../database/conexao");
class GrupoMuscular {
  //  - index
  async index(req, res) {
    const dados = await conexao("grupoMuscular");
    res.status(200).json(dados);
  }

  //  - create
  async create(req, res) {
    const {
      nome,
      descricao
    } = req.body;

    const [id] = await conexao("grupoMuscular").insert({
      nome,
      descricao
    });
    res.status(200).json(id);
  }

  //  -  update
  async update(req, res) {
    const {
      id
    } = req.params;
    const {
      nome,
      descricao
    } = req.body;

    const ret = await conexao("grupoMuscular")
      .where({
        id
      })
      .update({
        nome,
        descricao
      });
    res.status(200).json(ret);
  }

  //  - select
  async select(req, res) {
    const {
      id
    } = req.params;
    const dados = await conexao("grupoMuscular").where({
      id
    });
    res.status(200).json(dados);
  }

  //  - delete
  async remove(req, res) {
    const {
      id
    } = req.params;
    const removed = await conexao("grupoMuscular").where("id", id).del();
    res.status(200).json({
      removed,
      "message": (removed ? "item removido" : "nao removido")
    })
  }
}
module.exports = GrupoMuscular;