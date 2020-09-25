const Ajv = require('ajv');

const configSchema = require('./config.json');

const ajv = new Ajv();

ajv.addSchema(configSchema, 'config');

module.exports = ajv;