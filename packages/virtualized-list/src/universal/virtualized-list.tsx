import { VirtualizedList as VirtualizedListNative } from '../native';
import type { VirtualizedListHandle, VirtualizedListProps } from './types';

function VirtualizedList<T>({ ref, web: _web, native, ...props }: VirtualizedListProps<T>) {
  return (
    <VirtualizedListNative
      ref={ref as unknown as React.Ref<VirtualizedListHandle>}
      {...props}
      {...native}
    />
  );
}

export { VirtualizedList };
