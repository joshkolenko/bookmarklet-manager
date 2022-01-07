import { createStitches } from '@stitches/react';
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from '@radix-ui/colors';

export const { styled } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...blueDark,
    },
    fonts: {
      lato: ['Lato', 'sans-serif'],
    },
  },
});
