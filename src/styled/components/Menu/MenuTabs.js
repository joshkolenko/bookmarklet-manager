import * as Tabs from '@radix-ui/react-tabs';
import { styled } from '../../styled';

const StyledMenuTabs = styled(Tabs.Root, {});

const StyledMenuTabsList = styled(Tabs.List, {});

const StyledMenuTabsTrigger = styled(Tabs.Trigger, {});

const StyledMenuTabsContent = styled(Tabs.Content, {});

const StyledMenuTabsHeader = styled('div', {});

export const MenuTabs = StyledMenuTabs;
export const MenuTabsList = StyledMenuTabsList;
export const MenuTabsTrigger = StyledMenuTabsTrigger;
export const MenuTabsContent = StyledMenuTabsContent;
export const MenuTabsHeader = StyledMenuTabsHeader;
