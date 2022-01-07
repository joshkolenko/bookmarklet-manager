import React from 'react';
import { createStitches, globalCss } from '@stitches/react';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lato:400,700,900', 'sans-serif'],
  },
});

const { styled } = createStitches({
  theme: {
    fonts: {
      lato: ['Lato', 'sans-serif'],
    },
  },
});

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
    fontFamily: '$lato',
  });

  return <App>Bookmarklet App</App>;
}
