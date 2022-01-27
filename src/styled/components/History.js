import { styled } from '../styled';

export const History = styled('div', {
  gridColumn: '1/3',
  fontSize: '$2',

  '& td': {
    padding: '$1',
    borderSpacing: 0,
  },
});

export const HistoryItem = styled('div', {
  // background: '$surface',
  padding: '$3 $4',
  borderRadius: 14,
  cursor: 'pointer',

  '&:hover': {
    background: '$hover',
  },
});

export const HistoryRow = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '.history-locale, .history-instance': {
    marginRight: 'auto',
  },

  '.history-brand': {
    fontFamily: '$title',
    fontSize: '$3',
    fontWeight: '$4',
    color: 'white',
  },

  '.history-locale': {
    fontFamily: '$title',
    marginLeft: '$1',
  },

  '.history-time': {
    fontFamily: '$title',
    fontSize: '$1',
    fontWeight: '$4',
  },

  '.history-instance': {
    display: 'flex',
    alignItems: 'center',
    color: '$primary',
    fontSize: '$1',
    fontWeight: '$3',

    '&:before ': {
      content: '',
      display: 'block',
      width: 8,
      height: 8,
      borderRadius: 9999,
      marginRight: '$1',
      background: '$primary',
    },
  },

  '.history-pagetype': {
    fontSize: '$1',
  },
});
