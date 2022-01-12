import React, { useEffect, useState } from 'react';

import { globalStyles } from '../styled/global';
import { bookmarklets } from '../data/bookmarklets';

import Bookmarklets from './Bookmarklets';
import Search from './Search';
import GoTo from './GoTo';
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsHeader,
} from '../styled/components/Tabs';
import { BookmarkletManagerToggle } from '../styled/components/BookmarkletManagerToggle';
import { BookmarkletManager } from '../styled/components/BookmarkletManager';

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

  useEffect(() => {
    const handleHotKey = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'B') {
        setIsActive(!isActive);
      }
    };

    window.addEventListener('keyup', handleHotKey);

    return () => window.removeEventListener('keyup', handleHotKey);
  }, [isActive]);

  globalStyles();

  return (
    <BookmarkletManager className={isActive ? 'active' : ''}>
      <TabsRoot defaultValue="bookmarklets">
        <BookmarkletManagerToggle
          onClick={() => setIsActive(!isActive)}
          className="bookmark-manager-toggle">
          <i className="fas fa-caret-left" />
        </BookmarkletManagerToggle>
        <TabsList>
          <TabsTrigger value="bookmarklets">Bookmarklets</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="bookmarklets">
          <TabsRoot defaultValue="favorites">
            <TabsList>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="search" className="icon-tab">
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
        </TabsContent>
        <TabsContent value="tools">
          <TabsRoot defaultValue="go-to">
            <TabsList>
              <TabsTrigger value="go-to">Go to</TabsTrigger>
            </TabsList>
            <TabsContent value="go-to">
              <GoTo></GoTo>
            </TabsContent>
          </TabsRoot>
        </TabsContent>
      </TabsRoot>
    </BookmarkletManager>
  );
}
