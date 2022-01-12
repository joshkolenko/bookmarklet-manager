import React from 'react';
import { ScrollAreaRoot } from '../styled/components/ScrollArea';
import Bookmarklet from './Bookmarklet';

export default function Bookmarklets({
  bookmarklets,
  favorites,
  handleFavorite,
  message,
}) {
  const renderedBookmarklets = bookmarklets.map((bm) => (
    <Bookmarklet
      key={bm.name}
      name={bm.name}
      type={bm.type}
      script={bm.script}
      isFav={favorites.find((f) => f === bm.name)}
      handleFavorite={handleFavorite}
    />
  ));

  return (
    <ScrollAreaRoot>
      {renderedBookmarklets.length ? (
        renderedBookmarklets
      ) : (
        <span>{message}</span>
      )}
    </ScrollAreaRoot>
  );
}
