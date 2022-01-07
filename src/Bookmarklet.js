import React from 'react';

export default function Bookmarklet({ script, children }) {
  return <button onClick={script}>{children}</button>;
}
