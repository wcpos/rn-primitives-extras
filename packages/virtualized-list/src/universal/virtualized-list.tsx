import { Root as RootNative, Item as ItemNative, useItemContext, useRootContext } from '../native';
import type { VirtualizedListHandle, RootProps, ItemProps } from './types';

function Root<T>({ ref, web: _web, native, ...props }: RootProps<T>) {
  return <RootNative ref={ref as any} {...props} {...native} />;
}

function Item<T>({ ref, web: _web, native, ...props }: any) {
  return <ItemNative ref={ref as any} {...props} {...native} />;
}

export { Root, Item, useRootContext, useItemContext };
