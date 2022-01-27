import * as RadixTabs from '@radix-ui/react-tabs';
import { styled } from '../styled';

const StyledTabs = styled(RadixTabs.Root, {});

const StyledTabsList = styled(RadixTabs.List, {
  display: 'flex',
  padding: '0 $6',
});

const StyledTabsTrigger = styled(RadixTabs.Trigger, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  color: '$text',
  alignItems: 'center',
  flex: 1,
  height: 60,
  fontFamily: '$title',
  fontSize: '$2',
  fontWeight: '$4',
  borderRadius: '15px',
  letterSpacing: 0.2,
  marginRight: '$2',

  '&:last-of-type': { marginRight: 0 },

  '&.icon-tab': { fontSize: '$4', maxWidth: 60 },

  '&:hover': { background: '$hover' },

  '&[data-state="active"]': {
    background: '$primary',
    color: '$onPrimary',
  },
});

const StyledTabsContent = styled(RadixTabs.Content, {
  color: '$text',
  padding: '0 $6',
});

const StyledTabsHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$title',
  fontSize: '$1',
  fontWeight: '$5',
  color: '$text',
  padding: '$5 0 $2',
  textTransform: 'uppercase',
});

export const Tabs = StyledTabs;
export const TabsList = StyledTabsList;
export const TabsTrigger = StyledTabsTrigger;
export const TabsContent = StyledTabsContent;
export const TabsHeader = StyledTabsHeader;
