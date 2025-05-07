import { Stack } from 'expo-router';
import * as React from 'react';
import { VirtualizedList } from '~/components/ui/virtualized-list';
import { Text } from '~/components/ui/text';

interface Row {
  title: string;
}

const DATA: Row[] = Array.from({ length: 500 }, (_, i) => ({
  title: `Item #${i + 1}`,
}));

export default function VirtualizedListScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShadowVisible: false }} />
      <VirtualizedList
        data={DATA}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        estimatedItemSize={24}
      />
    </>
  );
}
