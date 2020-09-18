const cli = require('./cli');
const resolver = require('./resolver');
const wrapper = require('./wrapper');

module.exports = function (app) {
  const functionsPath = cli.getFunctionsPath();
  const targetFunctions = cli.getTargetFunctions();

  let functions = resolver(functionsPath);

  if (targetFunctions.length > 0) {
    functions = functions.filter(func => targetFunctions.includes(func.name));
  }

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