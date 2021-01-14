const knex = require("knex"); // to make sql queries using javascript

const config = require("../knexfile.js"); // different configs for different envs

// inside of HEROKU, NODE_ENV // has a value of "production"

const env = process.env.NODE_ENV || "development";

console.log("the env is", env);

module.exports = knex(config[env]); // choose env and call knex with the right config
