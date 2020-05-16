const GrupoMuscular = require("../model/model_grupoMuscular.js");
const grupo = new GrupoMuscular();

module.exports.autoroute = {
  get: {
    "/grupomuscular": index,
    "/grupomuscular/:id": select
  },
  post: {
    "/grupomuscular": create
  },
  put: {
    "/grupomuscular/:id": update
  }
};
function create (req, res) {
  grupo.create(req, res)
}
function index(req, res) {
  grupo.index(req, res)
}
function update(req, res) {
  grupo.update(req, res)
}
function select(req, res) {
  grupo.select(req, res)
}