import React, { useEffect, useState } from 'react';
import { bookmarklets } from '../data/bookmarklets';
import { TabsHeader } from '../styled/Tabs';
import Bookmarklets from './Bookmarklets';

export default function Search({ favorites, handleFavorite }) {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const initialMessage = 'Type above to search bookmarklets';
  const [message, setMessage] = useState(initialMessage);

  useEffect(() => {
    const getResults = () => {
      const regexp = new RegExp(`(^|)(${term})(|$)`, 'i');

      if (term) return bookmarklets.filter((bm) => bm.name.match(regexp));
      return [];
    };

    setMessage(term ? 'No results' : initialMessage);

    setResults(getResults());
  }, [term]);

  return (
    <React.Fragment>
      <TabsHeader>
        Search bookmarklets
        <input
          type="text"
          onInput={(e) => setTerm(e.target.value)}
          value={term}
        />
      </TabsHeader>
      <Bookmarklets
        bookmarklets={results}
        favorites={favorites}
        handleFavorite={handleFavorite}
        message={message}
      />
    </React.Fragment>
  );
}
