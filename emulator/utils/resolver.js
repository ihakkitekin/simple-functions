const path = require('path');

module.exports = function (functionsPath) {
  const configFilePath = path.resolve(process.cwd(), functionsPath, 'functions.config.json');

  const configFile = require(configFilePath);

  return configFile.functions.map(func => {
    const functionPath = path.resolve(process.cwd(), functionsPath, func.entry);

    const _function = require(functionPath);

    return {
      name: func.name,
      path: func.path,
      method: func.method,
      self: _function
    }
  });
}