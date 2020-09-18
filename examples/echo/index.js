module.exports = function (context) {
  const message = context.request.query.message;

  if (!message) {
    return 'Is anybody there? Pass me a $message';
  }

  return message;
}