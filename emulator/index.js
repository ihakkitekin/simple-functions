const express = require('express');
const { argv } = require('yargs');
const bootstrap = require('./utils/bootstrap');

const port = argv.port || 32245;
const app = express();

const functions = bootstrap(app);

app.listen(port, () => {
  let links = '';

  functions.forEach(func => {
    links += `${func.name}: http://localhost:${port}${func.path}\n`
  });

  console.log(`Listening functions: \n${links}`);
});