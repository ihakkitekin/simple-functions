module.exports = function (func) {
  return async (req, res, next) => {
    const context = {
      request: req,
      response: res
    };

    try {
      const result = await new Promise((resolve) => {
        resolve(func(context))
      });

      if (!res.headersSent) {
        return res.send(result);
      }
    } catch (error) {
      next(error);
    }
  }
}