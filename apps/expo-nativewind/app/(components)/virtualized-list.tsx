import { Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { VirtualizedList } from '~/components/ui/virtualized-list';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import type { VirtualizedListHandle } from '~/components/ui/virtualized-list';

interface Row {
  title: string;
}

const DATA: Row[] = Array.from({ length: 5000 }, (_, i) => ({
  title: `Item #${i + 1}`,
}));

export default function VirtualizedListScreen() {
  const listRef = React.useRef<VirtualizedListHandle>(null);

  return (
    <>
      <Stack.Screen options={{ headerShadowVisible: false }} />
      <View className='gap-2 h-full'>
        <View className='flex-row gap-2 items-center justify-center'>
          <Button onPress={() => listRef.current?.scrollToIndex({ index: 0 })}>
            <Text>Scroll to top</Text>
          </Button>
          <Button onPress={() => listRef.current?.scrollToIndex({ index: DATA.length - 1 })}>
            <Text>Scroll to bottom</Text>
          </Button>
          <Button onPress={() => listRef.current?.scrollToIndex({ index: DATA.length / 2 })}>
            <Text>Scroll to middle</Text>
          </Button>
        </View>
        <View className='flex-1'>
          <VirtualizedList
            ref={listRef}
            data={DATA}
            renderItem={({ item }) => {
              return <Text>{item.title}</Text>;
            }}
            estimatedItemSize={24}
          />
        </View>
      </View>
    </>
  );
}
