import type { FlashListProps } from '@shopify/flash-list';
import type { BaseItemProps, BaseListProps, BaseRootProps } from '../base-types';

type RootProps = BaseRootProps;
type RootPropsNativeOnly = {};

type ListProps<T> = BaseListProps<T> & ListPropsNativeOnly<T>;
type ListPropsNativeOnly<T> = Omit<
  FlashListProps<T>,
  'ref' | 'data' | 'estimatedItemSize' | 'horizontal' | 'overscan' | 'keyExtractor' | 'renderItem'
>;

type ItemProps<T> = BaseItemProps<T>;
type ItemPropsNativeOnly = {};

export type {
  ItemProps,
  ItemPropsNativeOnly,
  ListProps,
  ListPropsNativeOnly,
  RootProps,
  RootPropsNativeOnly,
};
