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

export const handleKeystroke = (shortcut, keystroke, callback) => {
  if (shortcut === keystroke && callback) {
    callback();
  }
};
