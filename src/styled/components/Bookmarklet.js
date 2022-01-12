import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { styled } from '../styled';

const StyledBookmarklet = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '$3',
  fontWeight: '700',
  padding: '$1 $2',
  backgroundColor: '$surface',
  color: 'white',
  borderRadius: 4,
  marginBottom: '$5',
  border: '1px solid transparent',

  '&.favorite': {
    '.favorite-button': {
      color: '$primary !important',
    },
  },
});

const StyledBookmarkletIconButton = styled('button', {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 36,
  height: 36,
  fontSize: '$5',
  cursor: 'pointer',
  borderRadius: '100%',

  '&.favorite-button': {
    margin: '-8px 6px -8px -8px',
    color: '$onSurface',
  },

  '&.settings-button': {
    margin: '-8px 8px -8px auto',
    color: '$onBackground',
  },

  '&:hover': {
    backgroundColor: '$onBackgroundA',
  },
});

const StyledBookmarkletPlayButton = styled('button', {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$primary',
  color: '$onPrimary',
  height: 28,
  width: 44,
  fontSize: '$1',
  fontWeight: '$3',
  letterSpacing: 0.5,
  borderRadius: 28,
  cursor: 'pointer',
});

const StyledSwitchRoot = styled(Switch.Root, {
  all: 'unset',
  display: 'flex',
  height: 28,
  width: 44,
  padding: 2,
  background: '$primaryA2',
  borderRadius: 28,
  cursor: 'pointer',
  transition: 'background 300ms ease',
  '&[data-state="checked"]': { background: '$primaryA' },
});

const StyledSwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 24,
  height: 24,
  background: '$primary',
  borderRadius: 24,
  position: 'relative',
  transition: 'transform 200ms ease',
  '&[data-state="checked"]': { transform: 'translateX(16px)' },
});

export function BookmarkletSwitch({ script }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledSwitchRoot
      checked={isActive}
      onCheckedChange={() => {
        setIsActive(!isActive);
        script();
      }}>
      <StyledSwitchThumb />
    </StyledSwitchRoot>
  );
}

export function BookmarkletIconButton({ className = '', icon, script }) {
  return (
    <StyledBookmarkletIconButton className={className} onClick={() => script()}>
      <i className={`fas fa-${icon}`} />
    </StyledBookmarkletIconButton>
  );
}

export function BookmarkletPlayButton({ script }) {
  return (
    <StyledBookmarkletPlayButton onClick={() => script()}>
      <i className={`fas fa-play`} />
    </StyledBookmarkletPlayButton>
  );
}

export const BookmarkletRoot = StyledBookmarklet;
