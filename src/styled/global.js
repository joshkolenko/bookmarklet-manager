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

  '#fed-toolkit *, .toolkit-dialog *': {
    boxSizing: 'border-box',
    lineHeight: 'normal !important',
    letterSpacing: 'normal !important',

    '&:focus': {
      outline: 'none',
    },
  },

  '#fed-toolkit button': {
    cursor: 'pointer',
  },

  '#fed-toolkit input, .toolkit-dialog input': {
    all: 'unset',
    background: '$surface',
    margin: '$2 0 $4',
    fontSize: '$3 !important',
    fontWeight: '$4',
    fontFamily: '$title',
    padding: '$2 $3',
    borderRadius: '5px',
    color: '$title',
    cursor: 'text',
    border: '3px solid transparent !important',
    textTransform: 'none',

    '&:focus': {
      border: '3px solid $primary !important',
    },
  },

  '.toolkit-menu': {
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
