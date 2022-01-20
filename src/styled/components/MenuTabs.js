import * as RadixTabs from '@radix-ui/react-tabs';
import { styled } from '../styled';

const StyledMenuTabs = styled(RadixTabs.Root, {});

const StyledMenuTabsList = styled(RadixTabs.List, {
  display: 'flex',
  alignItems: 'center',
  padding: '$6 $6 0',
});

const StyledMenuTabsTrigger = styled(RadixTabs.Trigger, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$4',
  width: 60,
  height: 60,
  background: '$background',
  color: '$text',
  marginRight: '$2',
  borderRadius: '15px',

  '&:last-of-type': { marginRight: 0 },

  '&.icon-tab': { fontSize: '$4', maxWidth: 60 },

  '&:hover': { background: '$hover' },

  '&[data-state="active"]': {
    background: '$primary',
    color: '$onPrimary',
  },
});

const StyledMenuTabsContent = styled(RadixTabs.Content, {});

const StyledMenuTabsHeader = styled('div', {
  color: '$title',
  fontFamily: '$title',
  fontWeight: '$4',
  fontSize: '$6',
  padding: '$7 $6 $5',
});

export const MenuTabs = StyledMenuTabs;
export const MenuTabsList = StyledMenuTabsList;
export const MenuTabsTrigger = StyledMenuTabsTrigger;
export const MenuTabsContent = StyledMenuTabsContent;
export const MenuTabsHeader = StyledMenuTabsHeader;
