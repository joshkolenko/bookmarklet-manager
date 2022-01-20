import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '../styled';

const StyledScrollArea = styled(RadixScrollArea.Root, {
  height: '100%',
  position: 'relative',
});
const StyledScrollAreaViewport = styled(RadixScrollArea.Viewport, {
  padding: '$4 0',
  fontFamily: '$body',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});
const StyledScrollAreaScrollbar = styled(RadixScrollArea.Scrollbar, {});
const StyledScrollAreaThumb = styled(RadixScrollArea.Thumb, {});
const StyledScrollAreaCorner = styled(RadixScrollArea.Corner, {});

export default function ScrollArea({ children }) {
  return (
    <StyledScrollArea className="scroll-area">
      <StyledScrollAreaViewport>{children}</StyledScrollAreaViewport>
      <StyledScrollAreaScrollbar orientation="horizontal">
        <StyledScrollAreaThumb />
      </StyledScrollAreaScrollbar>
      <StyledScrollAreaScrollbar orientation="vertical">
        <StyledScrollAreaThumb />
      </StyledScrollAreaScrollbar>
      <StyledScrollAreaCorner />
    </StyledScrollArea>
  );
}
