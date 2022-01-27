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
import Field from '../../styled/components/Field';

export default function BookmarkletManager() {
  const storage = window.localStorage;

  const getFavorites = () => {
    if (storage.getItem('bookmarklet-favorites')) {
      return storage
        .getItem('bookmarklet-favorites')
        .split(',')
        .map((f) => parseInt(f));
    }

    return [];
  };

  const [favorites, setFavorites] = useState(getFavorites());

  const handleFavorite = (id, isFavorite) => {
    const newFavorites = isFavorite
      ? favorites.filter((fid) => fid !== id)
      : [...favorites, id];
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

    if (searchResults.length !== getSearchResults().length) {
      setSearchResults(getSearchResults());
      setSearchMessage(searchTerm ? 'No results' : initialSearchMessage);
    }
  }, [searchTerm]);

  const getRenderedBookmarklets = (bookmarklets, message) => {
    if (bookmarklets.length) {
      return bookmarklets.map((bm) => (
        <Bookmarklet
          key={bm.id}
          bookmarklet={bm}
          isFavorite={favorites.find((fid) => fid === bm.id)}
          handleFavorite={handleFavorite}
        />
      ));
    } else {
      return message;
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Tabs className="tabs" defaultValue="favorites">
      <TabsList>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="search" className="icon-tab">
          <i className="fas fa-search" />
        </TabsTrigger>
      </TabsList>
      <TabsContent className="tabs-content" value="favorites">
        <TabsHeader>Favorited bookmarklets</TabsHeader>
        <ScrollArea>
          {getRenderedBookmarklets(
            bookmarklets.filter((bm) => favorites.find((fid) => fid === bm.id)),
            'No favorited bookmarklets'
          )}
        </ScrollArea>
      </TabsContent>
      <TabsContent className="tabs-content" value="all">
        <TabsHeader>All bookmarklets</TabsHeader>
        <ScrollArea>
          {getRenderedBookmarklets(bookmarklets, 'No bookmarklets found')}
        </ScrollArea>
      </TabsContent>
      <TabsContent className="tabs-content" value="search">
        <TabsHeader>
          <Field handleChange={handleSearchTermChange} value={searchTerm}>
            Search Bookmarklets
          </Field>
        </TabsHeader>
        <ScrollArea>
          {getRenderedBookmarklets(searchResults, searchMessage)}
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
}
