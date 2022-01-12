import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '#fed-toolkit': {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10000,
  },

  '#fed-toolkit *:not(.fas)': {
    fontFamily: '$lato',
    boxSizing: 'border-box',
  },
});