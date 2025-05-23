import type { FlashListProps } from '@shopify/flash-list';
import type { BaseRootProps, BaseItemProps } from '../base-types';

type RootProps<T> = BaseRootProps<T> & BasePropsNativeOnly<T>;
type BasePropsNativeOnly<T> = Omit<
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

type ItemProps<T> = BaseItemProps<T>;
type RootPropsNativeOnly<T> = {};

export type { RootProps, BasePropsNativeOnly, ItemProps, RootPropsNativeOnly };
