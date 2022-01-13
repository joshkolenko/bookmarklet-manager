import { createStitches } from '@stitches/react';

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      background: 'white',
      surface: 'lightgray',
      text: 'black',
      border: 'gray',
    },
    space: {
      1: '6px',
      2: '8px',
      3: '12px',
      4: '20px',
      5: '28px',
      6: '36px',
      7: '48px',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '18px',
      4: '20px',
      5: '24px',
    },
    fontWeights: {
      1: '200',
      2: '400',
      3: '500',
      4: '700',
      5: '800',
    },
    fonts: {
      title: ['proxima-nova', 'sans-serif'],
      body: ['yorkten-slab-normal', 'sans-serif'],
    },
  },
});

export const darkTheme = createTheme('dark', {
  colors: {
    background: 'black',
    text: 'white',
  },
});
