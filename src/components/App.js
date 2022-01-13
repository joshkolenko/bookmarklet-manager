import React, { useEffect } from 'react';

import { globalStyles } from '../styled/global';
import Menu from './Menu';

export default function App() {
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
    observer.observe(root.querySelector('div[role="tablist"] button'), {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  globalStyles();

  return <Menu />;
}
