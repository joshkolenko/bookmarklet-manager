import * as Tabs from '@radix-ui/react-tabs';
import { styled } from './styled';

const StyledTabs = styled(Tabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  height: 550,
  width: 400,
});

const StyledTabsList = styled(Tabs.List, {
  display: 'flex',
});

const StyledTabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$4',
  fontWeight: '$2',
  cursor: 'pointer',
  padding: '0 $4',
  background: '$background',
  color: '$onBackground',
  borderBottom: '1px solid $primary',
  borderTop: 'none',
  height: 50,
  flex: 1,

  '&:hover': {
    backgroundColor: '$backgroundActive',
  },

  '&:focus, &:focus-visible': {
    outline: '1px solid $primary',
    borderTop: 'none',
    outline: 'none',
  },

  '&[data-state="active"]': {
    backgroundColor: '$backgroundActive',
    borderBottom: '3px solid $primary',
    borderTop: 'none',
  },

  '&:first-of-type': {
    borderRadius: '6px 0 0 0',
  },

  '&.icon-tab': {
    padding: '$1 $2',
    fontSize: '18px',
  },
});

const StyledTabsContent = styled(Tabs.Content, {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$background',
  color: '$onBackground',
  height: '100%',
  borderRadius: '0 0 6px 6px',

  '&[data-state="inactive"]': {
    display: 'none',
  },
});

const StyledTabsHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '$3',
  fontWeight: '$3',
  padding: '$2',
  backgroundColor: '$backgroundActive',
  borderBottom: '2px solid $surface',

  input: {
    background: '$surface',
    marginTop: '$1',
    border: '1px solid $onSurface',
    outline: '2px solid transparent',
    padding: '$5 $1',
    borderRadius: 4,
    color: 'white',
    fontSize: '$3',
    width: '100%',

    '&:focus': {
      outline: '2px solid $primaryA',
      border: '1px solid $primary',
    },
  },
});

export const TabsRoot = StyledTabs;
export const TabsList = StyledTabsList;
export const TabsTrigger = StyledTabsTrigger;
export const TabsContent = StyledTabsContent;
export const TabsHeader = StyledTabsHeader;
