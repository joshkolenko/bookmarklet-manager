import React from 'react';

import Bookmarklets from './Bookmarklets/Bookmarklets';
import Tools from './Tools/Tools';

import {
  MenuTabs,
  MenuTabsContent,
  MenuTabsList,
  MenuTabsTrigger,
} from '../styled/components/MenuTabs';

import { styled, darkTheme } from '../styled/styled';

const StyledMenu = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  pointerEvents: 'auto',
  position: 'absolute',
  top: 20,
  right: -0,
  bottom: 0,
  width: 400,
  filter: 'drop-shadow(-3px 3px 10px rgba(0, 0, 0, 0.2))',
});

export default function Menu() {
  const useDark = false;

  return (
    <StyledMenu className={useDark ? darkTheme : null}>
      <MenuTabs defaultValue="bookmarklets">
        <MenuTabsList>
          <MenuTabsTrigger value="bookmarklets">
            <i className="fas fa-bookmark" />
          </MenuTabsTrigger>
          <MenuTabsTrigger value="tools">
            <i className="fas fa-tools" />
          </MenuTabsTrigger>
        </MenuTabsList>
        <MenuTabsContent value="bookmarklets">
          <Bookmarklets />
        </MenuTabsContent>
        <MenuTabsContent value="tools">
          <Tools />
        </MenuTabsContent>
      </MenuTabs>
    </StyledMenu>
  );
}
