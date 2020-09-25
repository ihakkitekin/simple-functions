import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {App} from './app';

const serverRender = (props: any) => {
  const html = renderToString(React.createElement(App, props));

  return html;
}

export { serverRender }