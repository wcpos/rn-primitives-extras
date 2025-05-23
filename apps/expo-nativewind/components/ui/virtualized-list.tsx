import * as VirtualizedListPrimitive from '@rn-primitives/virtualized-list';

const VirtualizedList = VirtualizedListPrimitive.Root;
const VirtualizedListItem = VirtualizedListPrimitive.Item;

const useItemContext = VirtualizedListPrimitive.useItemContext;
const useRootContext = VirtualizedListPrimitive.useRootContext;

export { VirtualizedList, VirtualizedListItem, useItemContext, useRootContext };
