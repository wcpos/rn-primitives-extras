import { View } from '@rn-primitives/core/dist/native';
import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import type { BaseItemContext } from '../base-types';
import { ItemContext, RootContext, useItemContext, useRootContext } from '../utils/contexts';
import type { ItemProps, ListProps, RootProps } from './types';
import { SlottableWithNestedChildren } from '../utils/slottable-with-nested-children';

function Root(props: RootProps) {
  return (
    <RootContext.Provider value={null}>
      <View {...props} style={{ flex: 1 }} />
    </RootContext.Provider>
  );
}

function List<T>({
  ref,
  overscan = 4,
  keyExtractor,
  children,
  data,
  estimatedItemSize,
  // renderItem, // allow override for custom item rendering?
  asChild,
  ...rest
}: ListProps<T>) {
  const flashRef = React.useRef<FlashList<T>>(null);

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: ({
      index,
      align = 'start',
      animated = true,
    }: {
      index: number;
      align?: 'start' | 'center' | 'end';
      animated?: boolean;
    }) =>
      flashRef.current?.scrollToIndex({
        index,
        animated,
        viewPosition: align === 'end' ? 1 : align === 'center' ? 0.5 : 0,
      }),
    scrollToOffset: (offset: number, animated = true) =>
      flashRef.current?.scrollToOffset({ offset, animated }),
  }));

  const flashList = (
    <FlashList
      ref={flashRef}
      data={data}
      keyExtractor={keyExtractor}
      drawDistance={overscan * estimatedItemSize} // px
      estimatedItemSize={estimatedItemSize}
      renderItem={({ item, index }) => {
        const key = keyExtractor ? keyExtractor(item, index) : String(index);
        return (
          <ItemContext.Provider value={{ item, index } as BaseItemContext<T>} key={key}>
            {children}
          </ItemContext.Provider>
        );
      }}
      {...rest}
    />
  );

  return (
    <SlottableWithNestedChildren asChild={asChild} slotRenderer={() => flashList}>
      {children}
    </SlottableWithNestedChildren>
  );
}

function Item<T>({ asChild, children }: ItemProps<T>) {
  // style isn't used on native; item & index can be used by descendants
  const { item, index } = useItemContext();

  if (asChild) {
    return <View>{children}</View>;
  }

  return <>{children}</>;
}

export { Item, List, Root, useItemContext, useRootContext };
