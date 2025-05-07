import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import type { VirtualizedListProps } from '../universal/types';

function VirtualizedList<T>({ ref, overscan = 4, keyExtractor, ...rest }: VirtualizedListProps<T>) {
  const flashRef = React.useRef<FlashList<T>>(null);

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: ({ index, align = 'start', animated = true }) =>
      flashRef.current?.scrollToIndex({
        index,
        animated,
        viewPosition: align === 'end' ? 1 : align === 'center' ? 0.5 : 0,
      }),
    scrollToOffset: (offset, animated = true) =>
      flashRef.current?.scrollToOffset({ offset, animated }),
  }));

  return (
    <FlashList
      ref={flashRef}
      keyExtractor={keyExtractor}
      drawDistance={overscan * rest.estimatedItemSize} // px
      {...rest}
    />
  );
}

export { VirtualizedList };
