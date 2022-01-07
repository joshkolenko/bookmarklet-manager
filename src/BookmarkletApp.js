import React from 'react';
import { bookmarklets } from './bookmarklets';
import Bookmarklet from './Bookmarklet';

import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Lato:400,700,900', 'sans-serif'],
  },
});

import { globalCss } from '@stitches/react';
import { styled } from './styled';

const globalStyles = globalCss({
  '#bookmarklet-container-root': {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: '10000',
  },
});

export default function BookmarkletApp() {
  globalStyles();

  const App = styled('div', {
    '*': {
      fontFamily: '$lato',
    },
    backgroundColor: '$blue4',
    border: '1px solid $blue6',
    borderRadius: '4px',
    padding: '20px',
  });

  const renderedBookmarklets = bookmarklets.map((bm) => (
    <Bookmarklet key={bm.name} script={bm.script}>
      {bm.name}
    </Bookmarklet>
  ));

  return <App>{renderedBookmarklets}</App>;
}
