import React, { useState } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';
import { styled } from '../styled';

const StyledBookmarklet = styled('div', {});

const StyledBookmarkletIconButton = styled('button', {});

const StyledBookmarkletPlayButton = styled('button', {});

const StyledSwitch = styled(RadixSwitch.Root, {});

const StyledSwitchThumb = styled(RadixSwitch.Thumb, {});

export function BookmarkletSwitch({ script }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledSwitch
      checked={isActive}
      onCheckedChange={() => {
        setIsActive(!isActive);
        script();
      }}>
      <StyledSwitchThumb />
    </StyledSwitch>
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
