import type { VirtualizedListProps } from './types';

function VirtualizedList<T>(props: VirtualizedListProps<T>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedList` from @rn-primitives/virtualized-list/native is only supported on native.'
    );
  }
  return null;
}

export { VirtualizedList };
