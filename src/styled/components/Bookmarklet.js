import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { styled } from '../styled';

const StyledBookmarklet = styled('div', {});

const StyledBookmarkletIconButton = styled('button', {});

const StyledBookmarkletPlayButton = styled('button', {});

const StyledSwitchRoot = styled(Switch.Root, {});

const StyledSwitchThumb = styled(Switch.Thumb, {});

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
