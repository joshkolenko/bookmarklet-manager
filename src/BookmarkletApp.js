import React from 'react';
import ReactDOM from 'react-dom';

export default function BookmarkletApp() {
  const divStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
  };

  return ReactDOM.createPortal(
    <div style={divStyle}>Bookmarklet App</div>,
    document.querySelector('body')
  );
}
