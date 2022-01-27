import { bookmarklets } from '../data/bookmarklets';

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

export const handleKeystroke = async (keystroke, functions) => {
  if (keystroke === 'ALT + SHIFT + B') {
    functions[0]();

    return;
  }

  const storage = window.localStorage;

  const settingsJSON = storage.getItem('bookmarklet-settings');
  const settings = JSON.parse(settingsJSON);

  const match = settings.find((s) => s.shortcut === keystroke);

  if (match) {
    try {
      const bookmarklet = bookmarklets.find((b) => b.id === match.id);
      bookmarklet.function();
    } catch {
      console.error(
        'Could not run bookmarklet, try running from the UI instead'
      );
    }
  }
};
