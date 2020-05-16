const Exercicio = require("../model/model_exercicio.js");
const exercicio = new Exercicio();

module.exports.autoroute = {
  get: {
    "/exercicio": index,
    "/exercicio/:id": select
  },
  post: {
    "/exercicio": create
  },
  put: {
    "/exercicio/:id": update
  }
};

function create(req, res) {
  exercicio.create(req, res)
}

function index(req, res) {
  exercicio.index(req, res)
}

function update(req, res) {
  exercicio.update(req, res)
}

function select(req, res) {
  exercicio.select(req, res)
}