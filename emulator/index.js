const express = require('express');
const bootstrap = require('./utils/bootstrap');
const cli = require('./utils/cli');

const port = cli.getPort();
const app = express();

const functions = bootstrap(app);

app.listen(port, () => {
  let links = '';

  functions.forEach(func => {
    links += `${func.name}: http://localhost:${port}${func.path}\n`
  });

  console.log(`Listening functions: \n${links}`);
});