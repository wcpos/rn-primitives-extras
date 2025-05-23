import { View } from '@rn-primitives/core';
import { Root as RootWeb, Item as ItemWeb, useRootContext, useItemContext } from '../web';
import type { VirtualizedListHandle, RootProps, ItemProps } from './types';

function Root<T>({ ref, native: _native, style, web, ...props }: RootProps<T>) {
  if (style) {
    return (
      <View style={style} asChild>
        <RootWeb ref={ref as any} {...props} {...web} />
      </View>
    );
  }
  return <RootWeb ref={ref as any} {...props} {...web} />;
}

function Item<T>({ ref, native: _native, style, web, ...props }: ItemProps<T>) {
  if (style) {
    return (
      <View style={style} asChild>
        <ItemWeb ref={ref as any} {...props} {...web} />
      </View>
    );
  }
  return <ItemWeb ref={ref as any} {...props} {...web} />;
}

export { Root, Item, useRootContext, useItemContext };
