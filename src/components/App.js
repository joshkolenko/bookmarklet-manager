import React, { useEffect } from 'react';

import { globalStyles } from '../styled/global';
import BookmarkletManager from './BookmarkletManager/BookmarkletManager';

export default function App() {
  const root = document.querySelector('#fed-toolkit');

  globalStyles();

  useEffect(() => {
    root
      .querySelectorAll('button')
      .forEach((button) => (button.disabled = false));
  }, []);

  return <BookmarkletManager />;
}
