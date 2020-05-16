const ExercicioTreino = require("../model/model_exercicioTreino.js");
const exercicioTreino = new ExercicioTreino();

module.exports.autoroute = {
  get: {
    "/exerciciotreino": index,
    "/exerciciotreino/:id": select
  },
  post: {
    "/exerciciotreino": create
  },
  put: {
    "/exerciciotreino/:id": update
  }
};

function create(req, res) {
  exercicioTreino.create(req, res)
}

function index(req, res) {
  exercicioTreino.index(req, res)
}

function update(req, res) {
  exercicioTreino.update(req, res)
}

function select(req, res) {
  exercicioTreino.select(req, res)
}