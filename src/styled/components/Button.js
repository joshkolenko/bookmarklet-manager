import React from 'react';
import { styled } from '../styled';

export const Button = styled('button', {
  all: 'unset',
  color: '$onPrimary',
  fontFamily: '$title',
  fontWeight: '$4',
  fontSize: '$2',
  padding: '$3 $5',
  borderRadius: 10,
  cursor: 'pointer',
  color: '$onPrimary',
  background: '$primary',

  '&:hover, &:focus': {
    background: '$primaryD',
  },

  '&.secondary': {
    color: '$primary',
    background: '$primaryA',
  },
});
