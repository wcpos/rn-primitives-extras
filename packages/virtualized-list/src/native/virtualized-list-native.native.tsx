import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import type { BaseItemContext, BaseRootContext } from '../base-types';
import { ItemContext, RootContext, useItemContext, useRootContext } from '../utils/contexts';
import type { ItemProps, RootProps } from './types';
import { View } from '@rn-primitives/core/dist/native';

function Root<T>({
  ref,
  overscan = 4,
  keyExtractor,
  children,
  data,
  estimatedItemSize,
  ...rest
}: RootProps<T>) {
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

  return (
    // <View>
    <RootContext.Provider value={{} as BaseRootContext<T>}>
      <FlashList
        ref={flashRef}
        data={data}
        keyExtractor={keyExtractor}
        drawDistance={overscan * estimatedItemSize} // px
        estimatedItemSize={estimatedItemSize}
        renderItem={({ item, index }) => {
          debugger;
          const key = keyExtractor ? keyExtractor(item, index) : String(index);
          return (
            <ItemContext.Provider value={{ item, index } as BaseItemContext<T>} key={key}>
              {children}
            </ItemContext.Provider>
          );
        }}
        // {...rest}
      />
    </RootContext.Provider>
    // </View>
  );
}

/**
 * Native Item primitive: consumes per-item context and renders children
 */
function Item<T>({ children }: ItemProps<T>) {
  // style isn't used on native; item & index can be used by descendants
  const { item, index } = useItemContext();
  return <>{children}</>;
}

export { Item, Root, useRootContext, useItemContext };
