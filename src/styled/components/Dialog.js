import * as RadixDialog from '@radix-ui/react-dialog';
import { styled } from '../styled';
import { Button } from './Button';

const StyledDialog = styled(RadixDialog.Root, {});
const StyledDialogTrigger = styled(RadixDialog.Trigger, {
  all: 'unset',

  '.settings': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '$4',
    color: '$icon',
    position: 'relative',
    width: 20,
    height: 20,
    zIndex: 1,

    '&:after': {
      content: '',
      display: 'block',
      position: 'absolute',
      top: -7,
      right: -7,
      bottom: -7,
      left: -7,
      zIndex: -1,
      borderRadius: 9999,
    },

    '&:hover': {
      '&:after': {
        background: '$hover',
      },
    },
  },
});
const StyledDialogOverlay = styled(RadixDialog.Overlay, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: '$surface',
  opacity: 0.5,
  zIndex: 10001,
});
const StyledDialogTitle = styled(RadixDialog.Title, {
  color: '$title',
  fontFamily: '$title',
  margin: '0 0 $3',
});
const StyledDialogDescription = styled(RadixDialog.Description, {
  color: '$text',
  fontFamily: '$title',
  margin: 0,
});
const StyledDialogClose = styled(RadixDialog.Close, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '$5',
  right: '$5',
  color: '$icon',
  width: 30,
  height: 30,
  cursor: 'pointer',
});
const StyledDialogContent = styled(RadixDialog.Content, {
  pointerEvents: 'none !important',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  zIndex: 10001,
  padding: '$3',
});
const Wrapper = styled('div', {
  pointerEvents: 'auto',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  padding: '$6',
  background: '$background',
  borderRadius: 8,
  width: '100%',
  maxWidth: 600,
});

export default function Dialog({
  trigger = 'Open',
  handleTriggerClick = null,
  button,
  handleButtonClick = null,
  title,
  description,
  children,
}) {
  return (
    <StyledDialog>
      <StyledDialogTrigger onClick={handleTriggerClick}>
        {trigger}
      </StyledDialogTrigger>
      <RadixDialog.Portal>
        <StyledDialogOverlay />
        <StyledDialogContent>
          <Wrapper>
            <StyledDialogTitle>{title}</StyledDialogTitle>
            <StyledDialogDescription>{description}</StyledDialogDescription>
            <StyledDialogClose>
              <i className="fas fa-times" />
            </StyledDialogClose>
            {children}
            <StyledDialogClose asChild>
              <Button css={{ marginLeft: 'auto' }} onClick={handleButtonClick}>
                {button}
              </Button>
            </StyledDialogClose>
          </Wrapper>
        </StyledDialogContent>
      </RadixDialog.Portal>
    </StyledDialog>
  );
}
