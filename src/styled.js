import { createStitches } from '@stitches/react';
import { mauveDark, violetDark, cyanDark } from '@radix-ui/colors';

import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Lato:400,700,900', 'sans-serif'],
  },
});

export const { styled } = createStitches({
  theme: {
    colors: {
      background: mauveDark.mauve2,
      surface: mauveDark.mauve6,
      primary: violetDark.violet8,
      secondary: cyanDark.cyan11,
      onBackground: mauveDark.mauve12,
      onSurface: mauveDark.mauve12,
      onPrimary: violetDark.violet4,
      onSecondary: cyanDark.cyan4,
    },
    space: {
      1: '12px',
      2: '16px',
      3: '24px',
      4: '36px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '20px',
    },
    fontWeights: {
      1: '400',
      2: '700',
      3: '900',
    },
    fonts: {
      lato: ['Lato', 'sans-serif'],
    },
  },
});
