import type { ViewProps } from '@rn-primitives/core/dist/native';
import type { Prettify } from '@rn-primitives/types';
import type { BaseVirtualizedListProps } from '../base-types';

type VirtualizedListProps<T> = Prettify<ViewProps & BaseVirtualizedListProps<T>>;
type VirtualizedListPropsNativeOnly = ViewProps;

export type { VirtualizedListProps, VirtualizedListPropsNativeOnly };
