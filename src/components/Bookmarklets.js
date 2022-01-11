import React from 'react';
import { ScrollAreaRoot } from '../styled/ScrollArea';
import { styled } from '../styled/styled';
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
      script={bm.script}
      isFav={favorites.find((f) => f === bm.name)}
      handleFavorite={handleFavorite}
    />
  ));

  const StyledMessage = styled('span', {
    fontSize: '$2',
  });

  return (
    <ScrollAreaRoot>
      {renderedBookmarklets.length ? (
        renderedBookmarklets
      ) : (
        <StyledMessage>{message}</StyledMessage>
      )}
    </ScrollAreaRoot>
  );
}
