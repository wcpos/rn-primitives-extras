import * as React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { VirtualizedListProps } from '../universal/types';

function VirtualizedList<T>({
  ref,
  data,
  renderItem,
  estimatedItemSize,
  overscan = 4,
  horizontal,
  keyExtractor,
  ...rest
}: VirtualizedListProps<T>) {
  const parentRef = React.useRef<HTMLDivElement>(null);

  /**
   * @see https://tanstack.com/virtual/latest/docs/api/virtualizer
   */
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    horizontal,
    overscan,
    estimateSize: () => estimatedItemSize,
    getItemKey: (index) => keyExtractor?.(data[index], index) ?? String(index),
  });

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: ({ index, align = 'start', animated = true }) =>
      rowVirtualizer.scrollToIndex(index, { align, behavior: animated ? 'smooth' : 'auto' }),
    scrollToOffset: (offset, animated = true) =>
      rowVirtualizer.scrollToOffset(offset, { behavior: animated ? 'smooth' : 'auto' }),
  }));

  return (
    <div ref={parentRef} style={{ overflow: 'auto', height: '100%' }}>
      <div
        style={{
          height: horizontal ? '100%' : `${rowVirtualizer.getTotalSize()}px`,
          width: horizontal ? `${rowVirtualizer.getTotalSize()}px` : '100%',
          position: 'relative',
        }}
      >
        {rowVirtualizer.getVirtualItems().map((vItem) => {
          return (
            <div
              key={vItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${vItem.size}px`,
                transform: horizontal ? undefined : `translateY(${vItem.start}px)`,
              }}
            >
              {renderItem({ item: data[vItem.index], index: vItem.index })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { VirtualizedList };
