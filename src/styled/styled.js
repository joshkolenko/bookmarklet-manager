import { createStitches } from '@stitches/react';

import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Lato:400,700,900', 'sans-serif'],
  },
});

export const { styled } = createStitches({
  theme: {
    colors: {},
    space: {},
    fontSizes: {},
    fontWeights: {},
    fonts: {
      lato: ['Lato', 'sans-serif'],
    },
  },
});
