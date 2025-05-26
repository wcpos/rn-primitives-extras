import { View } from '@rn-primitives/core';
import {
  Item as ItemWeb,
  List as ListWeb,
  Root as RootWeb,
  useItemContext,
  useRootContext,
} from '../web';
import type { ItemProps, ListProps, RootProps } from './types';

function Root({ native: _native, style, web, ...props }: RootProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <RootWeb {...props} {...web} />
      </View>
    );
  }
  return <RootWeb {...props} {...web} />;
}

function List<T>({ native: _native, style, web, ...props }: ListProps<T>) {
  if (style) {
    return (
      <View style={style} asChild>
        <ListWeb {...props} {...web} />
      </View>
    );
  }
  return <ListWeb {...props} {...web} />;
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

export { Item, List, Root, useItemContext, useRootContext };
