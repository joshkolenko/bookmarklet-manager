import React from 'react';
import { bookmarklets } from './bookmarklets';
import Bookmarklet from './Bookmarklet';
import * as ScrollArea from '@radix-ui/react-scroll-area';

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

  const ScrollRoot = styled(ScrollArea.Root, {
    '*': {
      fontFamily: '$lato',
    },
  });

  const ScrollAreaViewport = styled(ScrollArea.Viewport, {
    backgroundColor: '$gray1',
    border: '1px solid $gray5',
    borderRadius: '8px',
    padding: '30px',
    height: '500px',
    width: '300px',
    boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,
  });

  const scrollbarSize = '6px';

  const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
    display: 'flex',
    // ensures no selection
    userSelect: 'none',
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: 'none',
    padding: '2px',
    background: '$grayA2',
    transition: 'background 160ms ease-out',
    '&:hover': { background: '$grayA4' },
    '&[data-orientation="vertical"]': { width: scrollbarSize },
    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: scrollbarSize,
    },
  });

  const ScrollAreaThumb = styled(ScrollArea.Thumb, {
    flex: 1,
    background: '$grayA6',
    borderRadius: scrollbarSize,
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: 44,
      minHeight: 44,
    },
  });

  const Header = styled('span', {
    display: 'block',
    color: '$violet9',
    fontWeight: 900,
    fontSize: '24px',
    margin: '0 0 20px',
  });

  const renderedBookmarklets = bookmarklets.map((bm) => (
    <Bookmarklet key={bm.name} script={bm.script}>
      {bm.name}
    </Bookmarklet>
  ));

  return (
    <ScrollRoot>
      <ScrollAreaViewport>
        <Header>Bookmarklets</Header>
        {renderedBookmarklets}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollArea.Corner />
    </ScrollRoot>
  );
}
