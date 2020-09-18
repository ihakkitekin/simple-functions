const { argv } = require('yargs');

module.exports.getFunctionsPath = function () {
  return argv.functionsPath || argv.fp || 'functions';
}

module.exports.getTargetFunctions = function () {
  const selector = argv.functions || argv.f;

  if (!selector) return [];

  if (Array.isArray(selector)) {
    return selector;
  }

  return selector.split(',');
}

module.exports.getPort = function () {
  return argv.port || argv.p || 32245;
}