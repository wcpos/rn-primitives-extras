import type { FlashListProps } from '@shopify/flash-list';
import type { BaseVirtualizedListProps } from '../base-types';

type VirtualizedListProps<T> = BaseVirtualizedListProps<T>;
type VirtualizedListPropsNativeOnly<T> = Omit<
  FlashListProps<T>,
  | 'ref'
  | 'data'
  | 'renderItem'
  | 'estimatedItemSize'
  | 'horizontal'
  | 'overscan'
  | 'keyExtractor'
  | 'onEndReached'
  | 'onEndReachedThreshold'
>;

export type { VirtualizedListProps, VirtualizedListPropsNativeOnly };
