import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '../styled';

const StyledScrollArea = styled(RadixScrollArea.Root, {
  height: '100%',
  overflow: 'hidden',
});
const StyledScrollAreaViewport = styled(RadixScrollArea.Viewport, {
  height: '100%',
  padding: '$2 $2 $5',
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
