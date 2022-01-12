import { styled } from '../../styled';

const StyledBookmarkletManager = styled('div', {
  position: 'absolute',
  top: 100,
  right: -400,
  transition: 'transform 200ms ease',

  '&.active': {
    transform: 'translateX(-400px)',

    '.bookmark-manager-toggle': {
      i: {
        transform: 'rotate(180deg)',
      },
    },
  },

  '.bookmark-manager-toggle': {
    i: {
      transition: 'transform 300ms',
      width: 10,
    },
  },
});

export function BookmarkletManagerRoot({ className = [], children }) {
  return (
    <StyledBookmarkletManager className={className}>
      {children}
    </StyledBookmarkletManager>
  );
}
