import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '../styled';

const StyledScrollArea = styled(RadixScrollArea.Root, {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  flex: 1,
});
const StyledScrollAreaViewport = styled(RadixScrollArea.Viewport, {
  flex: 1,
  background: 'gray',
});
const StyledScrollAreaScrollbar = styled(RadixScrollArea.Scrollbar, {});
const StyledScrollAreaThumb = styled(RadixScrollArea.Thumb, {});
const StyledScrollAreaCorner = styled(RadixScrollArea.Corner, {});

export default function ScrollArea({ children }) {
  return (
    <StyledScrollArea>
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
