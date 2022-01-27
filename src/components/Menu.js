import React from 'react';

import Bookmarklets from './Bookmarklets/Bookmarklets';
import Tools from './Tools/Tools';

import {
  MenuTabs,
  MenuTabsContent,
  MenuTabsHeader,
  MenuTabsList,
  MenuTabsTrigger,
} from '../styled/components/MenuTabs';

import { styled } from '../styled/styled';

const StyledMenu = styled('div', {
  pointerEvents: 'auto',
  position: 'absolute',
  top: 0,
  right: -0,
  bottom: 0,
  width: 480,
  height: '100vh',
  background: '$background',
  filter: 'drop-shadow(-3px 3px 10px rgba(0, 0, 0, 0.2))',
});

export default function Menu() {
  return (
    <StyledMenu className="toolkit-menu">
      <MenuTabs className="menu-tabs" defaultValue="bookmarklets">
        <MenuTabsList>
          <MenuTabsTrigger value="bookmarklets">
            <i className="fas fa-bookmark" />
          </MenuTabsTrigger>
          <MenuTabsTrigger value="tools">
            <i className="fas fa-tools" />
          </MenuTabsTrigger>
        </MenuTabsList>
        <MenuTabsContent className="menu-tabs-content" value="bookmarklets">
          <MenuTabsHeader>Bookmarklets</MenuTabsHeader>
          <Bookmarklets />
        </MenuTabsContent>
        <MenuTabsContent className="menu-tabs-content" value="tools">
          <MenuTabsHeader>Tools</MenuTabsHeader>
          <Tools />
        </MenuTabsContent>
      </MenuTabs>
    </StyledMenu>
  );
}
