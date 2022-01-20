import React, { useState } from 'react';
import { styled } from '../styled';
import * as RadixSwitch from '@radix-ui/react-switch';

const StyledSwitch = styled(RadixSwitch.Root, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  height: 25,
  width: 42,
  background: '$background',
  borderRadius: 9999,
});
const StyledSwitchThumb = styled(RadixSwitch.Thumb, {
  display: 'block',
  height: 19,
  width: 19,
  background: '$icon',
  borderRadius: 9999,
  transform: 'translateX(3px)',
  transition: 'transform 200ms ease, background 200ms ease',

  '&[data-state="checked"]': {
    transform: 'translateX(20px)',
    background: '$primary',
  },
});

export default function Switch({ func, isActive }) {
  return (
    <StyledSwitch checked={isActive} onCheckedChange={func}>
      <StyledSwitchThumb />
    </StyledSwitch>
  );
}
