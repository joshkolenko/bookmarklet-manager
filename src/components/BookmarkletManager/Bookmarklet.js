import React from 'react';
import {
  BookmarkletRoot,
  BookmarkletIconButton,
  BookmarkletPlayButton,
  BookmarkletSwitch,
} from '../../styled/components/BookmarkletManager/Bookmarklet';

export default function Bookmarklet({
  name,
  type,
  script,
  isFav,
  handleFavorite,
}) {
  let renderedAction = <div />;

  if (type === 'toggle') renderedAction = <BookmarkletSwitch script={script} />;

  if (type === 'button')
    renderedAction = <BookmarkletPlayButton script={script} />;

  return (
    <BookmarkletRoot className={isFav ? 'favorite' : ''}>
      <BookmarkletIconButton
        icon="star"
        className="favorite-button"
        script={() => handleFavorite(name, isFav)}
      />
      {name}
      <BookmarkletIconButton className="settings-button" icon="cog" />
      {renderedAction}
    </BookmarkletRoot>
  );
}
