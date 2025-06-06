import { View } from '@rn-primitives/core/dist/web';
import { useVirtualizer } from '@tanstack/react-virtual';
import * as React from 'react';
import type { BaseItemContext } from '../base-types';
import { ItemContext, RootContext, useItemContext, useRootContext } from '../utils/contexts';
import type { ItemContextType, ItemProps, ListProps, RootProps } from './types';

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
      <View {...props} ref={parentRef} style={{ overflow: 'auto', display: 'block' }} />
    </RootContext.Provider>
  );
}

function List<T>({
  ref,
  data,
  renderItem,
  ListEmptyComponent = null,
  // customizable wrapper
  parentComponent: Parent = View as any,
  parentProps,
  // virtualization settings
  estimatedItemSize,
  overscan = 4,
  horizontal = false,
  keyExtractor,
  onEndReached,
  onEndReachedThreshold = 0.5,
  ...rest
}: ListProps<T>) {
  const { scrollElement } = useRootContext();

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

  // // optional end-reached
  // React.useEffect(() => {
  //   if (typeof onEndReached === 'function') {
  //     const items = rowVirtualizer.getVirtualItems();
  //     const last = items[items.length - 1];
  //     if (last && last.index >= data.length - 1 * onEndReachedThreshold) {
  //       onEndReached();
  //     }
  //   }
  // }, [rowVirtualizer.getVirtualItems(), data.length, onEndReached, onEndReachedThreshold]);

  // container style
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: horizontal ? '100%' : `${rowVirtualizer.getTotalSize()}px`,
    width: horizontal ? `${rowVirtualizer.getTotalSize()}px` : '100%',
    display: 'block',
  };

  // merge in any props (incl. style) for your wrapper
  const wrapperProps = {
    ...parentProps,
    style: { ...containerStyle, ...((parentProps as any)?.style || {}) },
  } as React.ComponentProps<typeof Parent>;

  const virtualItems = rowVirtualizer.getVirtualItems();

  // empty case
  if (virtualItems.length === 0) {
    if (!ListEmptyComponent) {
      return <Parent {...parentProps} />;
    }

    return (
      <Parent {...parentProps}>
        {React.isValidElement(ListEmptyComponent) ? ListEmptyComponent : <ListEmptyComponent />}
      </Parent>
    );
  }

  return (
    <Parent {...wrapperProps}>
      {virtualItems.map((vItem) => {
        const item = data[vItem.index];
        const key = keyExtractor ? keyExtractor(item, vItem.index) : String(vItem.key);

        return (
          <ItemContext.Provider
            key={key}
            value={
              {
                item,
                index: vItem.index,
                rowVirtualizer,
                vItem,
                horizontal,
              } as BaseItemContext<T>
            }
          >
            {renderItem({ item, index: vItem.index, target: 'Cell' })}
          </ItemContext.Provider>
        );
      })}
    </Parent>
  );
}

function Item<T>({ style, ...props }: ItemProps<T>) {
  const { index, rowVirtualizer, vItem, horizontal } = useItemContext() as ItemContextType<T>;

  return (
    <View
      data-index={index}
      style={{
        position: 'absolute' as const,
        top: 0,
        left: 0,
        width: '100%',
        transform: horizontal ? undefined : `translateY(${vItem.start}px)`,
      }}
      {...props}
      ref={(node) => rowVirtualizer.measureElement(node)}
    />
  );
}

export { Item, List, Root, useItemContext, useRootContext };
