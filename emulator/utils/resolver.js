const path = require('path');

module.exports = function (functionsPath) {
  const configFilePath = path.resolve(process.cwd(), functionsPath, 'functions.config.json');

  const configFile = require(configFilePath);

  if (!('functions' in configFile)) {
    console.error('`functions` field is missing in config file.\n');
    process.exit(1);
  }

  if (!Array.isArray(configFile.functions)) {
    console.error('`functions` needs to be an array.\n');
    process.exit(1);
  }

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