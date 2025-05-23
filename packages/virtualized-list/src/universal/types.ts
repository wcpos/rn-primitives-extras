import type { Prettify } from '@rn-primitives/types';
import type { BaseItemProps, BaseRootProps, BaseVirtualizedListHandle } from '../base-types';
import type {
  ItemProps as ItemPropsNativeOnly,
  RootProps as RootPropsNativeOnly,
} from '../native/types';
import type { ItemProps as ItemPropsWebOnly, RootProps as RootPropsWebOnly } from '../web/types';

type RootProps<T> = Prettify<
  BaseRootProps<T> & {
    native?: RootPropsNativeOnly<T>;
    web?: RootPropsWebOnly<T>;
  }
>;

type ItemProps<T> = Prettify<
  BaseItemProps<T> & {
    native?: ItemPropsNativeOnly<T>;
    web?: ItemPropsWebOnly<T>;
  }
>;

type VirtualizedListHandle = BaseVirtualizedListHandle;

export type { ItemProps, RootProps, VirtualizedListHandle };
