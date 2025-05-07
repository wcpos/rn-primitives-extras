import { ViewPropsUniversal } from '@rn-primitives/core';
import type { Prettify } from '@rn-primitives/types';
import type { BaseVirtualizedListHandle, BaseVirtualizedListProps } from '../base-types';
import type { VirtualizedListProps as VirtualizedListPropsNativeOnly } from '../native/types';
import type { VirtualizedListProps as VirtualizedListPropsWebOnly } from '../web/types';

type VirtualizedListProps<T> = Prettify<
  BaseVirtualizedListProps<T> &
    ViewPropsUniversal & {
      native?: VirtualizedListPropsNativeOnly<T>;
      web?: VirtualizedListPropsWebOnly<T>;
    }
>;

type VirtualizedListHandle = BaseVirtualizedListHandle;

export type { VirtualizedListProps, VirtualizedListHandle };
