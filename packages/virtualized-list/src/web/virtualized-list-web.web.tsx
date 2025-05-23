import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { BaseRootContext, BaseItemContext } from '../base-types';
import { RootContext, ItemContext, useRootContext, useItemContext } from '../utils/contexts';
import { View } from '@rn-primitives/core/dist/web';
import type { RootProps, ItemProps } from './types';

/**
 * Root primitive: sets up virtualization and provides contexts
 * Accepts `ref` as a prop (React 19 style)
 */
function Root<T>({
  ref,
  data,
  estimatedItemSize,
  overscan = 4,
  horizontal,
  keyExtractor,
  children,
  ...rest
}: RootProps<T>) {
  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    horizontal,
    overscan,
    estimateSize: () => estimatedItemSize,
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
    <RootContext.Provider value={{ data, rowVirtualizer } as BaseRootContext<T>}>
      <View ref={parentRef} style={{ overflow: 'auto', height: '100%' }}>
        <View
          style={{
            position: 'relative',
            height: horizontal ? '100%' : `${rowVirtualizer.getTotalSize()}px`,
            width: horizontal ? `${rowVirtualizer.getTotalSize()}px` : '100%',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((vItem) => {
            const item = data[vItem.index];
            const style: React.CSSProperties = {
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
      </View>
    </RootContext.Provider>
  );
}

/**
 * Item primitive: consumes per-item context and renders children
 */
function Item<T>(props: ItemProps<T>) {
  const { style } = useItemContext();
  return <View style={style as any} {...props} />;
}

// Re-export hooks and types
export { useRootContext, useItemContext, Item, Root };
