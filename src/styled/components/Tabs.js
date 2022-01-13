import * as RadixTabs from '@radix-ui/react-tabs';
import { styled } from '../styled';

const StyledTabs = styled(RadixTabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const StyledTabsList = styled(RadixTabs.List, {
  display: 'flex',
  padding: '$4',
});

const StyledTabsTrigger = styled(RadixTabs.Trigger, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  height: 60,
  fontFamily: '$title',
  fontSize: '$3',
  fontWeight: '$4',
  borderRadius: '5px',

  '&.icon-tab': { fontSize: '$4', maxWidth: 60 },

  '&[data-state="active"]': {
    background: '$text',
    color: '$background',
  },
});

const StyledTabsContent = styled(RadixTabs.Content, {
  '&[data-state="active"]': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

const StyledTabsHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 0 $4',
  margin: '0 $4 0',
  fontFamily: '$title',
  fontSize: '$3',
  fontWeight: '$4',
  borderBottom: '3px solid $surface',

  input: {
    all: 'unset',
    background: '$surface',
    marginTop: '$2',
    fontSize: '$2',
    padding: '$2 $3',
    borderRadius: '5px',
  },
});

export const Tabs = StyledTabs;
export const TabsList = StyledTabsList;
export const TabsTrigger = StyledTabsTrigger;
export const TabsContent = StyledTabsContent;
export const TabsHeader = StyledTabsHeader;
