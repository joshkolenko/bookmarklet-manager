import { styled } from '../../styled';

const StyledMenu = styled('div', {
  pointerEvents: 'auto',
  position: 'absolute',
  top: 0,
  right: -0,
  bottom: 0,
});

export function MenuRoot({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}
