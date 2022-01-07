import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkletApp from './BookmarkletApp';

const bookmarkletApp = document.createElement('div');
bookmarkletApp.id = 'bookmarklet-container-root';

document.body.append(bookmarkletApp);

ReactDOM.render(<BookmarkletApp />, document.querySelector('body'));

bookmarkletApp.remove();
