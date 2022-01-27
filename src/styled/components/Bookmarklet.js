import React, { useState } from 'react';
import { styled } from '../styled';
import Switch from './Switch';

const StyledBookmarklet = styled('div', {
  fontSize: '$2',
  fontWeight: '$3',
  fontFamily: '$title',
  letterSpacing: 0.3,
  background: '$surface',
  marginBottom: '$3',
  padding: '$4 $4 $4',
  color: '$onPrimary',
  borderRadius: '14px',
  border: '3px solid $surface',
  boxShadow: '0 14px 26px -20px rgba(0, 0, 0, 0.2)',

  '.bookmarklet-header, .bookmarklet-body': {
    display: 'flex',
  },

  '.bookmarklet-header': {
    alignItems: 'center',
    '.bookmarklet-name': {
      color: '$title',
      marginRight: 'auto',
      fontSize: '$3',
      fontWeight: '$4',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: 270,
    },
  },

  '.bookmarklet-body': {
    paddingTop: '$4',

    '.bookmarklet-description': {
      margin: '0 auto 0 0',
      color: '$text',
      fontFamily: '$body',
      fontSize: '$1',
      fontWeight: '$3',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: 270,
    },
  },

  '&.favorite': {
    border: '3px solid $primary',
    '.fa-star': { color: '$primary' },
  },
});

const StyledBookmarkletFavoriteButton = styled('button', {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$4',
  color: '$icon',
  position: 'relative',
  width: 20,
  height: 20,
  zIndex: 1,
  margin: '0 $3 0 0',

  '&:after': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: -7,
    right: -7,
    bottom: -7,
    left: -7,
    zIndex: -1,
    borderRadius: 9999,
  },

  '&:hover': {
    '&:after': {
      background: '$hover',
    },
  },
});

const StyledBookmarkletPlayButton = styled('button', {
  all: 'unset',
  height: 25,
  width: 42,
  background: '$primary',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$1',
  borderRadius: 9999,
});

export function BookmarkletSwitch({ func, isActive }) {
  return <Switch func={func} isActive={isActive} />;
}

export function BookmarkletFavoriteButton({ func }) {
  return (
    <StyledBookmarkletFavoriteButton onClick={() => func()}>
      <i className={`fas fa-star`} />
    </StyledBookmarkletFavoriteButton>
  );
}

export function BookmarkletPlayButton({ func }) {
  return (
    <StyledBookmarkletPlayButton onClick={() => func()}>
      <i className={`fas fa-play`} />
    </StyledBookmarkletPlayButton>
  );
}

export const BookmarkletRoot = StyledBookmarklet;
