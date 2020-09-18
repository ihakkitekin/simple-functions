module.exports = function (func) {
  return async (req, res, next) => {
    const context = {
      request: req
    };

    const result = await new Promise((resolve) => {
      resolve(func(context))
    });

    res.send(result);
  }
}