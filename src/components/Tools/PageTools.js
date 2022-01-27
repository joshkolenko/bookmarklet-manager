import React, { useEffect, useState } from 'react';
import Select from '../../styled/components/Select';
import { Button } from '../../styled/components/Button';
import { styled } from '../../styled/styled';
import Label from '../../styled/components/Label';
import {
  History,
  HistoryItem,
  HistoryRow,
} from '../../styled/components/History';

const SelectGroup = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '$3',
  gridRowGap: '$3',
});

export default function PageTools() {
  const storage = window.localStorage;

  const brands = [
    {
      text: 'Bates',
      value: 'batesfootwear',
      locales: [{ text: 'US', value: '_us' }],
    },
    {
      text: 'CAT',
      value: 'catfootwear',
      locales: [
        { text: 'US', value: '_us' },
        { text: 'Canada', value: '_ca' },
      ],
    },
    {
      text: 'Chacos',
      value: 'chacos',
      locales: [{ text: 'US', value: '_us' }],
    },
    {
      text: 'Grasshoppers',
      value: 'grasshoppers',
      locales: [{ text: 'US', value: '_us' }],
    },
    {
      text: 'Harley Davidson',
      value: 'harleydavidson',
      locales: [{ text: 'US', value: '_us' }],
    },
  ];
  const [brand, setBrand] = useState(brands[0]);

  const [locales, setLocales] = useState(brands[0].locales);
  const [locale, setLocale] = useState(locales[0]);

  useEffect(() => {
    setLocales(brand.locales);
  }, [brand]);

  const pageTypes = [
    { text: 'Home', value: 'home' },
    { text: 'PLP', value: 'plp' },
    { text: 'PDP', value: 'pdp' },
    { text: 'Account', value: 'account' },
    { text: 'Cart', value: 'cart' },
  ];

  const [pageType, setPageType] = useState(pageTypes[0]);

  const instances = [
    { text: 'Staging', value: 'staging' },
    { text: 'Development', value: 'development' },
    { text: 'Production', value: 'production' },
    { text: 'Sandbox', value: 'sandbox' },
  ];

  const [instance, setInstance] = useState(instances[0]);

  const getHistory = () => {
    const historyJSON = storage.getItem('page-history');

    if (historyJSON) {
      const parsed = JSON.parse(historyJSON).sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      return parsed;
    }

    return [];
  };

  const [userHistory, setUserHistory] = useState(getHistory());

  const addToHistory = (url, obj) => {
    const date = new Date();
    const item = obj
      ? {
          date,
          url: obj.url,
          brand: obj.brand,
          locale: obj.locale,
          pageType: obj.pageType,
          instance: obj.instance,
        }
      : { date, url, brand, locale, pageType, instance };
    s;
    const currentHistory = getHistory();

    if (currentHistory) {
      if (currentHistory.length >= 10) currentHistory.pop();
    }
    const updatedHistory = currentHistory ? [...currentHistory, item] : [item];

    storage.setItem('page-history', JSON.stringify(updatedHistory));

    setUserHistory(getHistory());
  };

  const handleSubmit = () => {
    const url = location.href;

    addToHistory(url);
  };

  const handleHistoryItemClick = () => {};

  const renderedHistoryItems = userHistory.map((h) => {
    const getDateStr = (date) => date.getMonth() + 1 + '/' + date.getUTCDate();
    const getTimeStr = (date) => {
      let hours = date.getHours();
      const ampm = hours >= 12 ? 'pm' : 'am';

      hours = hours % 12 || 12;
      const minutes = date.getMinutes();

      const timeStr = `${hours}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;

      return timeStr;
    };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(h.date);
    const time = `${daysOfWeek[date.getDay()]}, ${getDateStr(
      date
    )} | ${getTimeStr(date)}`;

    return (
      <HistoryItem key={h.date} onClick={handleHistoryItemClick}>
        <HistoryRow css={{ marginBottom: '$3' }}>
          <span className="history-brand">{h.brand.text}</span>
          <span className="history-locale">| {h.locale.text}</span>
          <span className="history-time">{time}</span>
        </HistoryRow>
        <HistoryRow>
          <span className="history-instance">{h.instance.text}</span>
          <span className="history-pagetype">
            Page Type: <strong>{h.pageType.text}</strong>
          </span>
        </HistoryRow>
      </HistoryItem>
    );
  });

  return (
    <SelectGroup>
      <Select selection={brand} handleValueChange={setBrand} options={brands}>
        Brand
      </Select>
      <Select
        selection={locale}
        handleValueChange={setLocale}
        options={locales}>
        Locale
      </Select>
      <Select
        selection={pageType}
        handleValueChange={setPageType}
        options={pageTypes}>
        Page Type
      </Select>
      <Select
        selection={instance}
        handleValueChange={setInstance}
        options={instances}>
        Instance
      </Select>
      <Button
        css={{ gridColumn: '2/3', marginLeft: 'auto' }}
        onClick={handleSubmit}>
        Submit
      </Button>
      <Label>History</Label>
      <History>{renderedHistoryItems}</History>
    </SelectGroup>
  );
}
