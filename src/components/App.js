import React, { useState, useEffect } from 'react';

import { globalStyles } from '../styled/global';
import { getKeystroke, handleKeystroke } from '../functions/keystroke';
import Menu from './Menu';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  // Override button disabled attribute on unlocked asset pages
  useEffect(() => {
    const root = document.querySelector('#fed-toolkit');
    const mutationCallback = (mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'disabled'
        )
          root
            .querySelectorAll('button')
            .forEach((button) => button.removeAttribute('disabled'));
      });
    };

    const observer = new MutationObserver(mutationCallback);
    const buttons = root.querySelector('div[role="tablist"] button');

    if (buttons) {
      observer.observe(buttons, {
        attributes: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const listenerCallback = (e) => {
      const keystroke = getKeystroke(e);

      if (keystroke) {
        const functions = [() => setShowMenu(!showMenu)];

        handleKeystroke(keystroke, functions);
      }
    };

    window.addEventListener('keyup', listenerCallback);

    return () => window.removeEventListener('keyup', listenerCallback);
  }, [showMenu]);

  globalStyles();

  return <Menu show={showMenu} />;
}
