export const getKeystroke = (e) => {
  const ctrl = e.ctrlKey ? 'CTRL' : e.metaKey ? 'CMD' : '';
  const shift = e.shiftKey ? 'SHIFT' : '';
  const alt = e.altKey ? 'ALT' : '';
  const key = e.code.replace('Key', '');

  if (
    !key.includes('Control') &&
    !key.includes('Shift') &&
    !key.includes('Alt') &&
    (ctrl || alt)
  ) {
    const combo =
      (ctrl ? ctrl + ' + ' : '') +
      (alt ? alt + ' + ' : '') +
      (shift ? shift + ' + ' : '') +
      key;

    if (combo) return combo;
    else return;
  }
};

export const handleKeystroke = async (keystroke) => {
  if (keystroke === 'ALT + SHIFT + B') {
    return true;
  }

  const bookmarklets = await getBookmarklets();
  const userSettings = await getUser();

  const match = settings.find((s) => s.shortcut === keystroke);

  if (match) {
    try {
      const bookmarklet = bookmarklets.find((b) => b.id === match.id);
      bookmarklet.function();
    } catch {
      console.error('error');
    }
  }
};
