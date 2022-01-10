import React from 'react';
import { styled } from './styled';

export default function Bookmarklet({ script, children }) {
  const StyledBookmarklet = styled('div', {});

  const StyledButton = styled('button', {});

  return (
    <StyledBookmarklet>
      {children}
      <StyledButton onClick={script}>Run</StyledButton>
    </StyledBookmarklet>
  );
}
