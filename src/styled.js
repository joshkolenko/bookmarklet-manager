import { createStitches } from '@stitches/react';
import { gray, violet, grayA } from '@radix-ui/colors';

console.log(violet);

export const { styled } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...grayA,
      ...violet,
    },
    fonts: {
      lato: ['Lato', 'sans-serif'],
    },
  },
});
