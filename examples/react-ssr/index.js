const utils = require('./utils');

module.exports = function (context) {
  const props = {
    name: 'Stream'
  }

  const html = utils.renderClient(props);

  return html;
}

module.exports.init = async function () {
  const targetPath = 'E:\\code\\simple-functions\\examples\\__react-app\\dist\\server.bundle.js';

  await utils.downloadClient(targetPath);
}