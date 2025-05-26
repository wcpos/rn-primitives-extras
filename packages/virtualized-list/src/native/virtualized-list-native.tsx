import type { RootProps, ListProps, ItemProps } from './types';
import type { RootContextReturnType, ItemContextReturnType } from '../utils/contexts';

function Root(props: RootProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedList` from @rn-primitives/virtualized-list/native is only supported on native.'
    );
  }
  return null as React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedList` from @rn-primitives/virtualized-list/native is only supported on native.'
    );
  }
  return null as React.ReactNode;
}

function Item<T>(props: ItemProps<T>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedListItem` from @rn-primitives/virtualized-list/native is only supported on native.'
    );
  }
  return null as React.ReactNode;
}

const useRootContext = () => {
  throw new Error(
    'Cannot access the native useRootContext on the web. Please import from `@rn-primitives/virtualized-list` or `@rn-primitives/virtualized-list/native`'
  );
  return {} as RootContextReturnType;
};

const useItemContext = () => {
  throw new Error(
    'Cannot access the native useItemContext on the web. Please import from `@rn-primitives/virtualized-list` or `@rn-primitives/virtualized-list/native`'
  );
  return {} as ItemContextReturnType;
};

export { Root, List, Item, useRootContext, useItemContext };
