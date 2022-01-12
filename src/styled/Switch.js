import * as Switch from '@radix-ui/react-switch';
import { useState } from 'react';
import { styled } from './styled';

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

export default function SwitchRoot({ script }) {
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
