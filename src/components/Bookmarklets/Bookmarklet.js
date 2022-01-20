import React, { useEffect, useState } from 'react';
import { getKeystroke, handleKeystroke } from '../../functions/keystroke';
import {
  BookmarkletRoot,
  BookmarkletFavoriteButton,
  BookmarkletPlayButton,
  BookmarkletSwitch,
} from '../../styled/components/Bookmarklet';
import BookmarkletSettings from './BookmarkletSettings';

export default function Bookmarklet({
  bookmarklet,
  isFavorite,
  handleFavorite,
}) {
  const storage = window.localStorage;

  const getSettings = () => {
    const settingsJSON = storage.getItem('bookmarklet-settings');
    const settings = settingsJSON ? JSON.parse(settingsJSON) : null;

    return settings;
  };

  const getUserBookmarklet = () => {
    const settings = getSettings();

    if (settings) {
      const userSettings = settings.find((s) => s.id === bookmarklet.id);

      if (userSettings) {
        const { name, shortcut, description } = userSettings;
        const { id, type } = bookmarklet;

        return {
          id,
          name,
          shortcut,
          description,
          type,
          function: bookmarklet.function,
        };
      }
    }

    return bookmarklet;
  };

  const [userBookmarklet, setUserBookmarklet] = useState(getUserBookmarklet());

  const handleSettingsChange = (updated) => {
    const settings = getSettings();
    if (settings) {
      const settingsExist = settings.find((s) => s.id === updated.id)
        ? true
        : false;

      const newSettings = settingsExist
        ? settings.map((s) => (s.id === updated.id ? updated : s))
        : [...settings, updated];

      const newSettingsJSON =
        newSettings.length > 1
          ? `[${newSettings.map((s) => JSON.stringify(s)).join(',')}]`
          : JSON.stringify(newSettings);

      storage.setItem('bookmarklet-settings', newSettingsJSON);
    } else {
      storage.setItem('bookmarklet-settings', JSON.stringify([updated]));
    }

    setUserBookmarklet(getUserBookmarklet());
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const listenerCallback = (e) => {
      const keystroke = getKeystroke(e);
      const shortcut = userBookmarklet.shortcut;
      const type = userBookmarklet.type;

      if (keystroke && shortcut) {
        handleKeystroke(
          shortcut,
          keystroke,
          type === 'toggle' ? toggleBookmarklet : userBookmarklet.function
        );
      }
    };

    window.addEventListener('keyup', listenerCallback);

    return () => window.removeEventListener('keyup', listenerCallback);
  }, [isActive, userBookmarklet]);

  let renderedAction = <div />;

  const toggleBookmarklet = () => {
    setIsActive(!isActive);

    userBookmarklet.function();
  };

  if (userBookmarklet.type === 'toggle')
    renderedAction = (
      <BookmarkletSwitch isActive={isActive} func={toggleBookmarklet} />
    );

  if (userBookmarklet.type === 'button')
    renderedAction = <BookmarkletPlayButton func={userBookmarklet.function} />;

  return (
    <BookmarkletRoot
      className={isFavorite ? 'favorite' : '' + isActive ? true : false}>
      <div className="bookmarklet-header">
        <BookmarkletFavoriteButton
          func={() => handleFavorite(userBookmarklet.id, isFavorite)}
        />
        <span className="bookmarklet-name">{userBookmarklet.name}</span>
        {renderedAction}
      </div>
      <div className="bookmarklet-body">
        <p className="bookmarklet-description">{userBookmarklet.description}</p>
        <BookmarkletSettings
          bookmarklet={userBookmarklet}
          onSettingsChange={handleSettingsChange}
        />
      </div>
    </BookmarkletRoot>
  );
}
