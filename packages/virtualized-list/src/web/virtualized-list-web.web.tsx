import { View } from '@rn-primitives/core/dist/web';
import { useVirtualizer } from '@tanstack/react-virtual';
import * as React from 'react';
import type { BaseItemContext } from '../base-types';
import { ItemContext, RootContext, useItemContext, useRootContext } from '../utils/contexts';
import type { ItemContextType, ItemProps, ListProps, RootProps } from './types';
import { SlottableWithNestedChildren } from '../utils/slottable-with-nested-children';

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
  estimatedItemSize,
  overscan = 4,
  horizontal,
  keyExtractor,
  children,
  asChild,
  ...rest
}: ListProps<T>) {
  const { scrollElement } = useRootContext();

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollElement,
    horizontal,
    overscan,
    estimateSize: () => estimatedItemSize,
    // measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
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

  const containerStyle = {
    position: 'relative' as const,
    height: horizontal ? '100%' : `${rowVirtualizer.getTotalSize()}px`,
    width: horizontal ? `${rowVirtualizer.getTotalSize()}px` : '100%',
    display: 'block' as const,
  };

  const renderVirtualizedContent = (content: React.ReactNode) => {
    return rowVirtualizer.getVirtualItems().map((vItem) => {
      const item = data[vItem.index];
      const key = keyExtractor ? keyExtractor(item, vItem.index) : vItem.key;

      return (
        <ItemContext.Provider
          key={key}
          value={
            { item, index: vItem.index, rowVirtualizer, vItem, horizontal } as BaseItemContext<T>
          }
        >
          {content}
        </ItemContext.Provider>
      );
    });
  };

  if (asChild) {
    return (
      <SlottableWithNestedChildren
        asChild={asChild}
        injectedProps={{ style: containerStyle }}
        slotRenderer={renderVirtualizedContent}
      >
        {children}
      </SlottableWithNestedChildren>
    );
  }

  return <View style={containerStyle}>{renderVirtualizedContent(children)}</View>;
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
