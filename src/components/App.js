import React, { useEffect, useState } from 'react';

import { bookmarklets } from '../data/bookmarklets';
import Bookmarklets from './Bookmarklets';
import Search from './Search';

import { globalCss } from '@stitches/react';
import { styled } from '../styled/styled';
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsHeader,
} from '../styled/Tabs';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const storage = window.localStorage;

  const getFavorites = () => {
    if (storage.getItem('bookmarklet-favorites')) {
      return storage.getItem('bookmarklet-favorites').split(',');
    }

    return [];
  };

  const [favorites, setFavorites] = useState(getFavorites());

  const handleFavorite = (name, isFav) => {
    const newFavorites = isFav
      ? favorites.filter((f) => f !== name)
      : [...favorites, name];

    storage.setItem('bookmarklet-favorites', newFavorites);

    setFavorites(getFavorites());
  };

  const Toggle = styled('button', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: -35,
    transform: 'translateY(-50%)',
    height: 70,
    width: 35,
    background: '$primaryA',
    color: '$primary',
    border: 'none',
    borderRadius: '6px 0 0 6px',
    fontSize: '24px',
    cursor: 'pointer',
  });

  const globalStyles = globalCss({
    '#bookmarklet-manager': {
      position: 'fixed',
      top: '10%',
      right: -350,
      zIndex: 10000,
      transition: 'transform 300ms ease',
    },

    '.bookmark-manager-toggle': {
      i: {
        transition: 'transform 300ms',
        width: 10,
      },
    },

    '#bookmarklet-manager.active': {
      transform: 'translateX(-350px)',

      '.bookmark-manager-toggle': {
        i: {
          transform: 'rotate(180deg)',
        },
      },
    },

    '#bookmarklet-manager *:not(.fas)': {
      fontFamily: '$lato',
      boxSizing: 'border-box',
    },
  });

  useEffect(() => {
    const root = document.querySelector('#bookmarklet-manager');

    if (isActive) root.classList.add('active');
    else root.classList.remove('active');
  }, [isActive]);

  globalStyles();

  return (
    <TabsRoot defaultValue="favorites">
      <Toggle
        onClick={() => setIsActive(!isActive)}
        className="bookmark-manager-toggle">
        <i className="fas fa-caret-left" />
      </Toggle>
      <TabsList>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="search">
          <i className="fas fa-search" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="favorites">
        <TabsHeader>Favorited bookmarklets</TabsHeader>
        <Bookmarklets
          bookmarklets={bookmarklets.filter((bm) =>
            favorites.find((f) => f === bm.name)
          )}
          favorites={favorites}
          handleFavorite={handleFavorite}
          message="No favorited bookmarklets"
        />
      </TabsContent>
      <TabsContent value="all">
        <TabsHeader>All bookmarklets</TabsHeader>
        <Bookmarklets
          bookmarklets={bookmarklets}
          favorites={favorites}
          handleFavorite={handleFavorite}
          message="No bookmarklets found"
        />
      </TabsContent>
      <TabsContent value="search">
        <Search favorites={favorites} handleFavorite={handleFavorite} />
      </TabsContent>
    </TabsRoot>
  );
}
