import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '#fed-toolkit': {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10000,
    pointerEvents: 'none',
  },

  '#fed-toolkit *': {
    boxSizing: 'border-box',
  },

  '#fed-toolkit button': {
    cursor: 'pointer',
  },

  '.menu': {
    '.menu-tabs, .tabs, .scroll-area': {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    '.menu-tabs-content, .tabs-content': {
      height: '100%',
      '&[data-state="active"]': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
});
