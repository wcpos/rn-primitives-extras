import { View } from '@rn-primitives/core';
import * as VirtualizedListPrimitive from '@rn-primitives/virtualized-list';

const VirtualizedList = (props: VirtualizedListPrimitive.VirtualizedListProps) => {
  return <VirtualizedListPrimitive.VirtualizedList {...props} />;
};

export { VirtualizedList };
