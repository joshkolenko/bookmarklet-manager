import React from 'react';
import { styled } from './styled';

export default function Bookmarklet({ script, children }) {
  const StyledBookmarklet = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid $gray6',
    padding: '12px 0',
    fontWeight: 700,
    fontSize: '16px',
    borderRadius: '6px',
    color: '$gray9',
    '&:last-of-type': {
      margin: '0',
    },
  });

  const StyledButton = styled('button', {
    padding: '10px 20px',
    fontWeight: 700,
    fontSize: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    backgroundColor: '$violet9',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  });

  return (
    <StyledBookmarklet>
      {children}
      <StyledButton onClick={script}>Run</StyledButton>
    </StyledBookmarklet>
  );
}
