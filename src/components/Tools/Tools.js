import React from 'react';
import ScrollArea from '../../styled/components/ScrollArea';
import {
  Tabs,
  TabsContent,
  TabsHeader,
  TabsList,
  TabsTrigger,
} from '../../styled/components/Tabs';
import PageTools from './PageTools';

export default function Tools() {
  return (
    <Tabs className="tabs" defaultValue="page-tools">
      <TabsList>
        <TabsTrigger value="page-tools">Page tools</TabsTrigger>
        <TabsTrigger value="site-options">Site options</TabsTrigger>
      </TabsList>
      <TabsContent className="tabs-content" value="page-tools">
        <TabsHeader>Page tools</TabsHeader>
        <ScrollArea>
          <PageTools />
        </ScrollArea>
      </TabsContent>
      <TabsContent className="tabs-content" value="site-options">
        <TabsHeader>Site options</TabsHeader>
      </TabsContent>
    </Tabs>
  );
}
