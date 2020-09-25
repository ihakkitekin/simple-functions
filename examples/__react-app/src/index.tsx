import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';


ReactDOM.hydrate(<App name="Stream" />, document.getElementById('root'))