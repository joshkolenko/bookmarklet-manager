import React from 'react';

import { globalStyles } from '../styled/global';
import BookmarkletManager from './BookmarkletManager/BookmarkletManager';

export default function App() {
  globalStyles();

  return <BookmarkletManager />;
}
