import type { RootProps, ItemProps, ListProps } from './types';
import type { ItemContextReturnType, RootContextReturnType } from '../utils/contexts';

function Root(props: RootProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedList` from @rn-primitives/virtualized-list/web is only supported on web.'
    );
  }
  return null;
}

function List<T>(props: ListProps<T>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedListItem` from @rn-primitives/virtualized-list/web is only supported on web.'
    );
  }
  return null;
}

function Item<T>(props: ItemProps<T>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedListItem` from @rn-primitives/virtualized-list/web is only supported on web.'
    );
  }
  return null;
}

const useRootContext = () => {
  throw new Error(
    'Cannot access the web useRootContext on a native platform. Please import from `@rn-primitives/virtualized-list` or `@rn-primitives/virtualized-list/native`'
  );
  return {} as RootContextReturnType;
};

const useItemContext = () => {
  throw new Error(
    'Cannot access the web useItemContext on a native platform. Please import from `@rn-primitives/virtualized-list` or `@rn-primitives/virtualized-list/native`'
  );
  return {} as ItemContextReturnType;
};

export { Root, List, Item, useRootContext, useItemContext };
