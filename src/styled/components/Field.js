import React from 'react';
import { styled } from '../styled';
import * as RadixLabel from '@radix-ui/react-label';

const StyledField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const StyledLabel = styled(RadixLabel.Root, {
  color: '$text',
  fontFamily: '$title',
  fontSize: '$1',
  fontWeight: '$4',
  textTransform: 'uppercase',
});

const StyledInput = styled('input', {
  all: 'unset',
  background: '$surface',
  margin: '$2 0 $4',
  fontSize: '$3',
  fontWeight: '$4',
  fontFamily: '$title',
  padding: '$2 $3',
  borderRadius: '5px',
  color: '$title',
  cursor: 'text',
  border: '3px solid transparent',
  textTransform: 'none',

  '&:focus': {
    border: '3px solid $primary',
  },
});

export default function Field({
  name = null,
  value,
  type = 'text',
  handleChange = null,
  handleKeyUp = null,
  handleFocus = null,
  handleBlur = null,
  readOnly = false,
  children,
}) {
  return (
    <StyledField>
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={readOnly}
      />
    </StyledField>
  );
}
