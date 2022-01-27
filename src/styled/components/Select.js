import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { styled } from '../styled';
import Label from './Label';

const StyledDropdownMenu = styled(Dropdown.Root, {});

const width = 198;

const Trigger = styled(Dropdown.Trigger, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3',
  background: '$surface',
  color: 'white',
  width: width,
  marginTop: '$2',
  fontFamily: '$title',
  fontSize: '$3',
  fontWeight: '$4',
  borderRadius: 10,
  overflow: 'hidden',
  border: '3px solid transparent',

  '&[data-state="open"]': {
    border: '3px solid $primary',
  },

  '& span': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});
const Content = styled(Dropdown.Content, {});
const RadioGroup = styled(Dropdown.RadioGroup, {
  background: '$surface',
  width: width,
  boxSizing: 'border-box',
  marginTop: '$1',
  borderRadius: 10,
  padding: '$3 0',
  overflow: 'hidden',
  border: '1px solid $primaryA',
  filter: 'drop-shadow(0 15px 20px rgba(65, 141, 254, 0.1))',
});
const RadioItem = styled(Dropdown.RadioItem, {
  color: 'white',
  fontFamily: '$title',
  fontSize: '$2',
  fontWeight: '$4',
  padding: '$1 $3',
  cursor: 'pointer',

  '&:hover, &:focus': {
    outline: 'none',
    background: '$hover',
  },

  '&.selected': {
    background: '$primaryA',
    color: '$primary',
  },
});
const RadioItemIndicator = styled(Dropdown.ItemIndicator, {});

export default function Select({
  selection,
  handleValueChange,
  options,
  children,
}) {
  const renderedOptions = options.map((option) => (
    <RadioItem
      className={selection.value === option.value ? 'selected' : ''}
      key={option.value}
      value={option.value}
      onClick={() => handleValueChange(option)}>
      {option.text}
      <RadioItemIndicator />
    </RadioItem>
  ));

  return (
    <div>
      <StyledDropdownMenu>
        <Label>{children}</Label>
        <Trigger>
          <span>{selection.text}</span>
          <i className="fas fa-chevron-down" />
        </Trigger>
        <Content>
          <RadioGroup value={selection.value}>{renderedOptions}</RadioGroup>
        </Content>
      </StyledDropdownMenu>
    </div>
  );
}
