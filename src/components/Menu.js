import React from 'react';
import { MenuRoot } from '../styled/components/Menu/Menu';

import {
  MenuTabs,
  MenuTabsContent,
  MenuTabsList,
  MenuTabsTrigger,
} from '../styled/components/Menu/MenuTabs';

import Bookmarklets from './Bookmarklets/Bookmarklets';
import Tools from './Tools/Tools';

export default function Menu() {
  return (
    <MenuRoot>
      <MenuTabs defaultValue="tools">
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
    </MenuRoot>
  );
}
