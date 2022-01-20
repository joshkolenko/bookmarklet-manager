import React, { useState } from 'react';
import { getKeystroke } from '../../functions/keystroke';
import Dialog from '../../styled/components/Dialog';
import Field from '../../styled/components/Field';
import { styled } from '../../styled/styled';

const Wrapper = styled('div', {
  margin: '$5 0 0',
  display: 'flex',
  flexDirection: 'column',
});

export default function BookmarkletSettings({ bookmarklet, onSettingsChange }) {
  const [name, setName] = useState(bookmarklet.name);
  const [description, setDescription] = useState(bookmarklet.description);
  const initialShortcut = bookmarklet.shortcut ? bookmarklet.shortcut : '';
  const [shortcut, setShortcut] = useState(initialShortcut);

  const handleShortcutKeyUp = (e) => {
    const keystroke = getKeystroke(e);

    if (keystroke) setShortcut(keystroke);
  };

  const handleShortcutFocus = (e) => {
    setShortcut('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOpenSettings = () => {
    setName(bookmarklet.name);
    setShortcut(initialShortcut);
  };

  const handleSave = (e) => {
    const newSettings = { id: bookmarklet.id, name, description, shortcut };

    onSettingsChange(newSettings);
  };

  return (
    <Dialog
      trigger={<i className="fas fa-cog settings" />}
      handleTriggerClick={handleOpenSettings}
      button="Save changes"
      handleButtonClick={handleSave}
      title={'Bookmarklet settings'}
      description={
        <React.Fragment>
          Edit settings for the <strong>{bookmarklet.name}</strong> bookmarklet
        </React.Fragment>
      }>
      <Wrapper>
        <Field handleChange={handleNameChange} value={name}>
          Bookmarklet Name
        </Field>
        <Field handleChange={handleDescriptionChange} value={description}>
          Bookmarklet Description
        </Field>
        <Field
          readOnly={true}
          handleKeyUp={handleShortcutKeyUp}
          handleFocus={handleShortcutFocus}
          value={shortcut}>
          Keyboard Shortcut
        </Field>
      </Wrapper>
    </Dialog>
  );
}
