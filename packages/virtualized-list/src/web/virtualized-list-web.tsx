import type { VirtualizedListProps } from './types';

function VirtualizedList<T>(props: VirtualizedListProps<T>) {
  if (process.env.NODE_ENV === 'development') {
    console.log(
      '`VirtualizedList` from @rn-primitives/virtualized-list/web is only supported on web.'
    );
  }
  return null;
}

export { VirtualizedList };
