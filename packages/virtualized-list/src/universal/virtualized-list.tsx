import { VirtualizedList as VirtualizedListNative } from '../native';
import type { VirtualizedListProps } from './types';

function VirtualizedList<T>({ web: _web, native, ...props }: VirtualizedListProps<T>) {
  return <VirtualizedListNative {...props} {...native} />;
}

export { VirtualizedList };
