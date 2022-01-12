import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const fedToolkit = document.createElement('div');
fedToolkit.id = 'fed-toolkit';

const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
fontAwesome.integrity =
  'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p';
fontAwesome.crossOrigin = 'anonymous';

document.body.append(fontAwesome, fedToolkit);

ReactDOM.render(<App />, document.querySelector('#fed-toolkit'));
