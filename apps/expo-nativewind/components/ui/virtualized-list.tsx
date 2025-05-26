import * as VirtualizedListPrimitive from '@rn-primitives/virtualized-list';

const VirtualizedList = VirtualizedListPrimitive.Root;
const VirtualizedListList = VirtualizedListPrimitive.List;
const VirtualizedListItem = VirtualizedListPrimitive.Item;

const useItemContext = VirtualizedListPrimitive.useItemContext;
const useRootContext = VirtualizedListPrimitive.useRootContext;

export {
  VirtualizedList,
  VirtualizedListList,
  VirtualizedListItem,
  useItemContext,
  useRootContext,
};
