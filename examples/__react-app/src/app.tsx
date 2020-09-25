import * as React from 'react';
import './app.css';

interface AppProps {
  name: string;
}

export const App = (props: AppProps) => {
  return <div className="app">Hello, {props.name}!</div>
}