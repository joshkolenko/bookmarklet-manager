import React, { useEffect, useState } from 'react';
import { bookmarklets } from '../../data/bookmarklets';

import { BookmarkletManagerRoot } from '../../styled/components/BookmarkletManager/BookmarkletManager';
import { BookmarkletManagerToggle } from '../../styled/components/BookmarkletManager/BookmarkletManagerToggle';

import Bookmarklets from './Bookmarklets';
import BookmarkletSearch from './BookmarkletSearch';
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsHeader,
} from '../../styled/components/Tabs';

export default function BookmarkletManager() {
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

  return (
    <BookmarkletManagerRoot className={isActive ? 'active' : ''}>
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
              <BookmarkletSearch
                favorites={favorites}
                handleFavorite={handleFavorite}
              />
            </TabsContent>
          </TabsRoot>
        </TabsContent>
        <TabsContent value="tools">
          <TabsRoot defaultValue="go-to">
            <TabsList>
              <TabsTrigger value="go-to">Go to</TabsTrigger>
            </TabsList>
            <TabsContent value="go-to">
              <h1>Goto</h1>
            </TabsContent>
          </TabsRoot>
        </TabsContent>
      </TabsRoot>
    </BookmarkletManagerRoot>
  );
}
