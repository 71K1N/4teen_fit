const Treino = require("../model/model_treino.js");
const treino = new Treino();

module.exports.autoroute = {
  get: {
    "/treino": index,
    "/treino/:id": select
  },
  post: {
    "/treino": create
  },
  put: {
    "/treino/:id": update
  }
};

function create(req, res) {
  treino.create(req, res)
}

function index(req, res) {
  treino.index(req, res)
}

function update(req, res) {
  treino.update(req, res)
}

function select(req, res) {
  treino.select(req, res)
}