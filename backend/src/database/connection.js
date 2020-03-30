const knex = require('knex');
const configuration = require('../../knexfile');

/** 
 * Recuperando o valor de uma variavel de ambiente definida no package.json
 * para validação de qual ambiente está sendo executado a aplicação.
 *  */ 
const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;