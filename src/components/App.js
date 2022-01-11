import React, { useState } from 'react';

import Bookmarklets from './Bookmarklets';
import { bookmarklets } from '../data/bookmarklets';

import { globalCss } from '@stitches/react';
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsHeader,
} from '../styled/Tabs';
import Search from './Search';

const globalStyles = globalCss({
  '#bookmarklet-container-root': {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: '10000',
  },

  '#bookmarklet-container-root *:not(.fas)': {
    fontFamily: '$lato',
    boxSizing: 'border-box',
  },
});

export default function App() {
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

  globalStyles();

  return (
    <TabsRoot defaultValue="search">
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
