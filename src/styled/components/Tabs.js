import * as RadixTabs from '@radix-ui/react-tabs';
import { styled } from '../styled';

const StyledTabs = styled(RadixTabs.Root, {});

const StyledTabsList = styled(RadixTabs.List, {});

const StyledTabsTrigger = styled(RadixTabs.Trigger, {});

const StyledTabsContent = styled(RadixTabs.Content, {});

const StyledTabsHeader = styled('div', {});

export const Tabs = StyledTabs;
export const TabsList = StyledTabsList;
export const TabsTrigger = StyledTabsTrigger;
export const TabsContent = StyledTabsContent;
export const TabsHeader = StyledTabsHeader;
