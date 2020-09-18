module.exports = function (func) {
  return async (req, res, next) => {
    const context = {
      request: req
    };

    try {
      const result = await new Promise((resolve) => {
        resolve(func(context))
      });
  
      return res.send(result);
    } catch (error) {
      next(error);
    }
  }
}