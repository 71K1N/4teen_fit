const knex = require("knex")
const configuration = require("../../knexfile")
const config = configuration.development
const conection = knex(config)
module.exports = conection