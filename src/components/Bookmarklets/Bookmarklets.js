import React, { useEffect, useState } from 'react';
import { bookmarklets } from '../../data/bookmarklets';

import Bookmarklet from './Bookmarklet';
import ScrollArea from '../../styled/components/ScrollArea';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsHeader,
} from '../../styled/components/Tabs';

export default function BookmarkletManager() {
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

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const initialSearchMessage = 'Type above to search bookmarklets';
  const [searchMessage, setSearchMessage] = useState(initialSearchMessage);

  useEffect(() => {
    const getSearchResults = () => {
      const regexp = new RegExp(`(^|)(${searchTerm})(|$)`, 'i');

      if (searchTerm) return bookmarklets.filter((bm) => bm.name.match(regexp));
      return [];
    };

    setSearchMessage(searchTerm ? 'No results' : initialSearchMessage);

    setSearchResults(getSearchResults());
  }, [searchTerm]);

  const getRenderedBookmarklets = (bookmarklets, message) => {
    if (bookmarklets.length) {
      return bookmarklets.map((bm) => (
        <Bookmarklet
          key={bm.name}
          name={bm.name}
          type={bm.type}
          script={bm.script}
          isFav={favorites.find((f) => f === bm.name)}
          handleFavorite={handleFavorite}
        />
      ));
    } else {
      return message;
    }
  };

  return (
    <Tabs defaultValue="search">
      <TabsList>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="search" className="icon-tab">
          <i className="fas fa-search" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="favorites">
        <TabsHeader>Favorited bookmarklets</TabsHeader>
        <ScrollArea>
          {getRenderedBookmarklets(
            bookmarklets.filter((bm) => favorites.find((f) => f === bm.name)),
            'No favorited bookmarklets'
          )}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="all">
        <TabsHeader>All bookmarklets</TabsHeader>
        <ScrollArea>
          {getRenderedBookmarklets(bookmarklets, 'No bookmarklets found')}
        </ScrollArea>
      </TabsContent>
      <TabsContent value="search">
        <TabsHeader>
          Search bookmarklets
          <input
            type="text"
            onInput={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </TabsHeader>
        <ScrollArea>
          {getRenderedBookmarklets(searchResults, searchMessage)}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
