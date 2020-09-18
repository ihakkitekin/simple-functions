const { argv } = require('yargs');
const resolver = require('./resolver');
const wrapper = require('./wrapper');

module.exports = function (app) {
  const functionsPath = argv.functionsPath || 'functions';

  const functions = resolver(functionsPath);

  functions.forEach(func => {
    switch ((func.method || 'get').toLowerCase()) {
      case "get":
        app.get(func.path, wrapper(func.self))
      case "post":
        app.post(func.path, wrapper(func.self))
      case "put":
        app.put(func.path, wrapper(func.self))
      case "delete":
        app.delete(func.path, wrapper(func.self))
    }
  });

  return functions;
}