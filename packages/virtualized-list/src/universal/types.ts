import type { Prettify } from '@rn-primitives/types';
import type {
  BaseItemProps,
  BaseListProps,
  BaseRootProps,
  BaseVirtualizedListHandle,
} from '../base-types';
import type {
  ItemProps as ItemPropsNativeOnly,
  ListProps as ListPropsNativeOnly,
  RootProps as RootPropsNativeOnly,
} from '../native/types';
import type {
  ItemProps as ItemPropsWebOnly,
  ListProps as ListPropsWebOnly,
  RootProps as RootPropsWebOnly,
} from '../web/types';

type RootProps = Prettify<
  BaseRootProps & {
    native?: RootPropsNativeOnly;
    web?: RootPropsWebOnly;
  }
>;

type ListProps<T> = Prettify<
  BaseListProps<T> & {
    native?: ListPropsNativeOnly<T>;
    web?: ListPropsWebOnly<T>;
  }
>;

type ItemProps<T> = Prettify<
  BaseItemProps<T> & {
    native?: ItemPropsNativeOnly<T>;
    web?: ItemPropsWebOnly<T>;
  }
>;

type VirtualizedListHandle = BaseVirtualizedListHandle;

export type { ItemProps, ListProps, RootProps, VirtualizedListHandle };
