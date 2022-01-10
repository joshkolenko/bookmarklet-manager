import React from 'react';
import { bookmarklets } from './bookmarklets';
import Bookmarklet from './Bookmarklet';

import { globalCss } from '@stitches/react';
import { styled } from './styled';

const globalStyles = globalCss({
  '#bookmarklet-container-root': {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: '10000',
  },
});

export default function BookmarkletApp() {
  const StyledApp = styled('div', {
    fontFamily: '$lato',
  });

  const StyledHeader = styled('span', {});

  globalStyles();

  const renderedBookmarklets = bookmarklets.map((bm) => (
    <Bookmarklet key={bm.name} script={bm.script}>
      {bm.name}
    </Bookmarklet>
  ));

  return (
    <StyledApp>
      <StyledHeader>Bookmarklets</StyledHeader>
      {renderedBookmarklets}
    </StyledApp>
  );
}
