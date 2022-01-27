import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  theme: {
    colors: {
      background: '#16181a',
      surface: '#252729',
      text: '#7a8188',
      icon: '#5d6369',
      title: 'white',
      hover: 'rgba(128, 139, 150, 0.1)',
      primary: '#418dfe',
      primaryD: '#2079FE',
      primaryA: 'rgba(65, 141, 254, 0.1)',
      onPrimary: 'white',
    },
    space: {
      1: '6px',
      2: '8px',
      3: '13px',
      4: '20px',
      5: '28px',
      6: '36px',
      7: '48px',
    },
    fontSizes: {
      1: '13px',
      2: '16px',
      3: '18px',
      4: '20px',
      5: '24px',
      6: '30px',
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
