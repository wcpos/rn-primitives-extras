import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { BaseRootContext, BaseItemContext } from '../base-types';
import { RootContext, ItemContext, useRootContext, useItemContext } from '../utils/contexts';
import { View } from '@rn-primitives/core/dist/web';
import type { RootProps, ItemProps, ListProps } from './types';

function Root(props: RootProps) {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const [scrollElement, setScrollElement] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (parentRef.current) {
      setScrollElement(parentRef.current);
    }
  }, []);

  return (
    <RootContext.Provider value={{ ref: parentRef, scrollElement }}>
      <View {...props} ref={parentRef} style={{ overflow: 'auto', height: '100%' }} />
    </RootContext.Provider>
  );
}

function List<T>({
  ref,
  data,
  estimatedItemSize,
  overscan = 4,
  horizontal,
  keyExtractor,
  children,
  ...rest
}: ListProps<T>) {
  const context = useRootContext();
  if (!context) {
    throw new Error('VirtualizedList must be used within a VirtualizedList.Root');
  }
  const { scrollElement } = context;

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollElement,
    horizontal,
    overscan,
    estimateSize: () => estimatedItemSize,
    ...rest,
  });

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: ({
      index,
      align = 'start',
      animated = true,
    }: {
      index: number;
      align?: 'start' | 'center' | 'end';
      animated?: boolean;
    }) => rowVirtualizer.scrollToIndex(index, { align, behavior: animated ? 'smooth' : 'auto' }),
    scrollToOffset: (offset: number, animated = true) =>
      rowVirtualizer.scrollToOffset(offset, { behavior: animated ? 'smooth' : 'auto' }),
  }));

  return (
    <View
      style={{
        position: 'relative',
        height: horizontal ? '100%' : `${rowVirtualizer.getTotalSize()}px`,
        width: horizontal ? `${rowVirtualizer.getTotalSize()}px` : '100%',
      }}
    >
      {rowVirtualizer.getVirtualItems().map((vItem) => {
        const item = data[vItem.index];
        const style = {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${vItem.size}px`,
          transform: horizontal ? undefined : `translateY(${vItem.start}px)`,
        };
        const key = keyExtractor ? keyExtractor(item, vItem.index) : vItem.key;

        return (
          <ItemContext.Provider
            key={key}
            value={{ item, index: vItem.index, style } as BaseItemContext<T>}
          >
            {children}
          </ItemContext.Provider>
        );
      })}
    </View>
  );
}

function Item<T>(props: ItemProps<T>) {
  const { style } = useItemContext();
  return <View style={style as any} {...props} />;
}

export { useItemContext, useRootContext, Item, List, Root };
