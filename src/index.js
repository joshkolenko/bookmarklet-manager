import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const bookmarkletApp = document.createElement('div');
bookmarkletApp.id = 'bookmarklet-manager';

const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
fontAwesome.integrity =
  'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p';
fontAwesome.crossOrigin = 'anonymous';

document.body.append(fontAwesome, bookmarkletApp);

ReactDOM.render(<App />, document.querySelector('#bookmarklet-manager'));
