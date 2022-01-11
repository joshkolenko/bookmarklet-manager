import { createStitches } from '@stitches/react';
import { mauveDark, violetDark, violetDarkA, cyanDark } from '@radix-ui/colors';

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
      backgroundActive: mauveDark.mauve3,
      surface: mauveDark.mauve4,
      primary: violetDark.violet8,
      primaryA: violetDarkA.violetA3,
      secondary: cyanDark.cyan11,
      onBackground: mauveDark.mauve11,
      onSurface: mauveDark.mauve8,
      onPrimary: violetDark.violet5,
      onSecondary: cyanDark.cyan6,
    },
    space: {
      1: '12px',
      2: '16px',
      3: '24px',
      4: '48px',
      5: '8px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '16px',
      5: '20px',
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
