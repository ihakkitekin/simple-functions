const { argv } = require('yargs');

module.exports.getFunctionsPath = function () {
  return argv.functionsPath || argv.s || 'functions';
}

module.exports.getTargetFunctions = function () {
  const selector = argv.functions || argv.f || [];

  if (Array.isArray(selector)) {
    return selector;
  }

  return selector.split(',');
}

module.exports.getPort = function () {
  return argv.port || argv.p || 32245;
}