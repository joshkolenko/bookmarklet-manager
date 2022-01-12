import * as ScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '../styled';

const StyledScrollArea = styled(ScrollArea.Root, {
  height: '100%',
  overflow: 'hidden',
});
const StyledScrollAreaViewport = styled(ScrollArea.Viewport, {
  height: '100%',
  padding: '$2 $2 $5',
});
const StyledScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {});
const StyledScrollAreaThumb = styled(ScrollArea.Thumb, {});
const StyledScrollAreaCorner = styled(ScrollArea.Corner, {});

export function ScrollAreaRoot({ children }) {
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
