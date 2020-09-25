const path = require('path');
const fs = require('fs');

async function downloadClient(targetPath) {
  const downloadPath = path.resolve(__dirname, 'server.bundle.js');

  const fileReadStream = fs.createReadStream(targetPath);
  const fileWriteStream = fs.createWriteStream(downloadPath);

  await new Promise((resolve, reject) => {
    fileReadStream
      .pipe(fileWriteStream)
      .on('finish', resolve);
  });
}

function renderClient(props) {
  const clientApp = require('./server.bundle.js');

  return clientApp.serverRender(props);
}

module.exports = {
  downloadClient,
  renderClient
}