import { styled } from '../../styled';

const StyledBookmarkletManagerToggle = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: -35,
  transform: 'translateY(-50%)',
  height: 70,
  width: 35,
  background: '$primary',
  color: '$onPrimary',
  border: 'none',
  borderRadius: '6px 0 0 6px',
  fontSize: '24px',
  cursor: 'pointer',
});

export const BookmarkletManagerToggle = StyledBookmarkletManagerToggle;
