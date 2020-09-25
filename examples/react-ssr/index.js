const utils = require('./utils');

module.exports = function (context) {
  const props = {
    name: 'Stream'
  }

  const html = utils.renderClient(props);

  return html;
}

module.exports.init = async function () {
  const path = require('path');
  const targetPath = path.resolve(__dirname, '../__react-app/dist/server.bundle.js');

  await utils.downloadClient(targetPath);
}