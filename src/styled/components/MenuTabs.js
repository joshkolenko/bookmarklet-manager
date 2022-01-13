import * as RadixTabs from '@radix-ui/react-tabs';
import { styled } from '../styled';

const StyledMenuTabs = styled(RadixTabs.Root, {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const StyledMenuTabsList = styled(RadixTabs.List, {
  background: '$background',
  display: 'flex',
  alignSelf: 'start',
  borderRadius: '16px 16px 0 0',
});

const StyledMenuTabsTrigger = styled(RadixTabs.Trigger, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '$4',
  width: 70,
  height: 50,
  borderRadius: '10px',

  '&:first-of-type': { borderRadius: '10px 0 0 0' },
  '&:last-of-type': { borderRadius: '0 10px 0 0' },

  '&[data-state="active"]': {
    background: '$text',
    color: '$background',
  },
});

const StyledMenuTabsContent = styled(RadixTabs.Content, {
  '&[data-state="active"]': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: '$background',
  },
});

const StyledMenuTabsHeader = styled('div', {});

export const MenuTabs = StyledMenuTabs;
export const MenuTabsList = StyledMenuTabsList;
export const MenuTabsTrigger = StyledMenuTabsTrigger;
export const MenuTabsContent = StyledMenuTabsContent;
export const MenuTabsHeader = StyledMenuTabsHeader;
