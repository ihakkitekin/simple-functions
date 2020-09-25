const path = require('path');
const ajv = require('../schemas');

module.exports = function (functionsPath) {
  const configFilePath = path.resolve(process.cwd(), functionsPath, 'functions.config.json');

  const configFile = require(configFilePath);
  const isValidConfigFile = ajv.validate('config', configFile);

  if (!isValidConfigFile) {
    console.error('ERROR:', ajv.errorsText());
    process.exit(1);
  }

  return configFile.functions.map(func => {
    const functionPath = path.resolve(process.cwd(), functionsPath, func.entry);

    const _function = require(functionPath);

    return {
      name: func.name,
      path: func.path,
      method: func.method,
      init: _function.init,
      self: _function
    }
  });
}