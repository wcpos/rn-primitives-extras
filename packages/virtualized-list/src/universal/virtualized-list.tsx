import {
  Root as RootNative,
  List as ListNative,
  Item as ItemNative,
  useItemContext,
  useRootContext,
} from '../native';
import type { VirtualizedListHandle, RootProps, ListProps, ItemProps } from './types';

function Root({ web: _web, native, ...props }: RootProps) {
  return <RootNative {...props} {...native} />;
}

function List<T>({ web: _web, native, ...props }: ListProps<T>) {
  return <ListNative {...props} {...native} />;
}

function Item<T>({ ref, web: _web, native, ...props }: any) {
  return <ItemNative ref={ref as any} {...props} {...native} />;
}

export { Root, List, Item, useRootContext, useItemContext };
