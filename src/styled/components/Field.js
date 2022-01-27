import React from 'react';
import { styled } from '../styled';
import Label from './Label';

const StyledField = styled('div', {
  display: 'flex',
  flexDirection: 'column',
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
      <Label htmlFor={name}>{children}</Label>
      <input
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
