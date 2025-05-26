import * as VirtualizedListPrimitive from '@rn-primitives/virtualized-list';

const Virtualized = VirtualizedListPrimitive.Root;
const VirtualizedList = VirtualizedListPrimitive.List;
const VirtualizedItem = VirtualizedListPrimitive.Item;

const useItemContext = VirtualizedListPrimitive.useItemContext;
const useRootContext = VirtualizedListPrimitive.useRootContext;

export { Virtualized, VirtualizedList, VirtualizedItem, useItemContext, useRootContext };
