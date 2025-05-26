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

  if (asChild) {
    const wrapper = React.Children.only(children) as React.ReactElement<{
      children?: React.ReactNode;
    }>;
    const innerContent = wrapper.props.children;

    const virtualizedContent = rowVirtualizer.getVirtualItems().map((vItem) => {
      const item = data[vItem.index];
      const style = {
        position: 'absolute' as const,
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
          value={{ item, index: vItem.index, style, rowVirtualizer } as BaseItemContext<T>}
        >
          {innerContent}
        </ItemContext.Provider>
      );
    });

    return React.cloneElement(wrapper, { style: containerStyle } as any, virtualizedContent);
  }

  const virtualizedContent = rowVirtualizer.getVirtualItems().map((vItem) => {
    const item = data[vItem.index];
    const style = {
      position: 'absolute' as const,
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
        value={{ item, index: vItem.index, style, rowVirtualizer } as BaseItemContext<T>}
      >
        {children}
      </ItemContext.Provider>
    );
  });

  return <View style={containerStyle}>{virtualizedContent}</View>;
}

function Item<T>(props: ItemProps<T>) {
  const { style, index, rowVirtualizer } = useItemContext() as ItemContextType<T>;

  return (
    <View
      data-index={index}
      style={style as any}
      {...props}
      ref={(node) => rowVirtualizer.measureElement(node)}
    />
  );
}

export { Item, List, Root, useItemContext, useRootContext };
