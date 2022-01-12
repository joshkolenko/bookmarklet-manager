import React from 'react';
import { styled } from '../styled/styled';
import SwitchRoot from '../styled/Switch';

export default function Bookmarklet({
  name,
  type,
  script,
  isFav,
  handleFavorite,
}) {
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

  const StyledIconButton = styled('button', {
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

  const StyledPlayButton = styled('button', {
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

  let renderedAction = <div />;

  if (type === 'toggle') {
    renderedAction = <SwitchRoot script={script} />;
  }

  if (type === 'button') {
    renderedAction = (
      <StyledPlayButton onClick={() => script()}>
        <i className="fas fa-play" />
      </StyledPlayButton>
    );
  }

  return (
    <StyledBookmarklet className={isFav ? 'favorite' : ''}>
      <StyledIconButton
        className="favorite-button"
        onClick={(e) => {
          e.stopPropagation();
          handleFavorite(name, isFav);
        }}>
        <i className="fas fa-star" />
      </StyledIconButton>
      {name}
      <StyledIconButton className="settings-button">
        <i className="fas fa-cog" />
      </StyledIconButton>
      {renderedAction}
    </StyledBookmarklet>
  );
}
