import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsHeader,
  TabsList,
  TabsTrigger,
} from '../../styled/components/Tabs';

export default function Tools() {
  return (
    <Tabs defaultValue="page-tools">
      <TabsList>
        <TabsTrigger value="page-tools">Page tools</TabsTrigger>
        <TabsTrigger value="site-options">Site options</TabsTrigger>
      </TabsList>
      <TabsContent value="page-tools">
        <TabsHeader>Page tools</TabsHeader>
      </TabsContent>
      <TabsContent value="site-options">
        <TabsHeader>Site options</TabsHeader>
      </TabsContent>
    </Tabs>
  );
}
