const utils = require('./utils');

const targetPath = 'E:\\code\\simple-functions\\examples\\__react-app\\dist\\server.bundle.js';

utils.downloadClient(targetPath);

module.exports = function (context) {
  const props = {
    name: 'Stream'
  }

  const html = utils.renderClient(props);

  return html;
}