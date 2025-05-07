import type { BaseVirtualizedListProps } from '../base-types';

type VirtualizedListProps<T> = BaseVirtualizedListProps<T>;

type VirtualizedListPropsWebOnly = React.ComponentProps<'div'>;

export type { VirtualizedListProps, VirtualizedListPropsWebOnly };
