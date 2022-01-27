import React from 'react';
import { styled } from '../styled';
import * as RadixLabel from '@radix-ui/react-label';

const StyledLabel = styled(RadixLabel.Root, {
  all: 'unset',
  color: '$text',
  fontFamily: '$title',
  fontSize: '$1',
  fontWeight: '$4',
  textTransform: 'uppercase',
});

export default function Label({ htmlFor = null, children }) {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
}
