const cli = require('./cli');
const resolver = require('./resolver');
const wrapper = require('./wrapper');

module.exports = async function (app) {
  const functionsPath = cli.getFunctionsPath();
  const targetFunctions = cli.getTargetFunctions();

  let functions = resolver(functionsPath);

  if (targetFunctions.length > 0) {
    functions = functions.filter(func => targetFunctions.includes(func.name));
  }

  for (let i = 0; i < functions.length; i++) {
    const func = functions[i];

    if (typeof func.init === 'function') {
      await Promise.resolve(func.init());
    }

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
  }

  return functions;
}