import React from 'react';
import { styled } from '../styled/styled';

export default function Bookmarklet({ name, script, isFav, handleFavorite }) {
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
    cursor: 'pointer',

    button: {
      marginRight: '$5',
    },

    '&.favorite': {
      button: {
        color: '$primary !important',
      },
    },

    '&:hover': {
      backgroundColor: '$primaryA',
      border: '1px solid $onPrimary',
    },
  });

  const StyledFavButton = styled('button', {
    padding: 8,
    margin: '-8px',
    background: 'none',
    border: 'none',
    fontSize: '$5',
    color: '$onSurface',
    cursor: 'pointer',
  });

  return (
    <StyledBookmarklet
      className={isFav ? 'favorite' : ''}
      onClick={() => script()}>
      <StyledFavButton
        onClick={(e) => {
          e.stopPropagation();
          handleFavorite(name, isFav);
        }}>
        <i className="fas fa-star" />
      </StyledFavButton>
      {name}
    </StyledBookmarklet>
  );
}
