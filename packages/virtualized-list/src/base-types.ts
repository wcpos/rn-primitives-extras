import type { ViewPropsUniversal } from '@rn-primitives/core';

import { StyleProp, ViewProps } from 'react-native';

type BaseRootProps = ViewPropsUniversal;

interface BaseVirtualizedListHandle {
  scrollToIndex(params: {
    index: number;
    align?: 'start' | 'center' | 'end';
    animated?: boolean;
  }): void;
  scrollToOffset(offset: number, animated?: boolean): void;
}

type BaseListProps<T> = {
  ref?: React.Ref<any>;

  children: React.ReactNode;

  /** Dataset – keep it immutable for perf */
  data: readonly T[];

  // /** Cell renderer – receives the logical index */
  // renderItem: (params: { item: T; index: number }) => React.ReactElement | null;

  /** Average/constant item size (px).  Required for perf */
  estimatedItemSize: number;

  /** Horizontal instead of vertical list */
  horizontal?: boolean;

  /** Number of extra items to render outside the viewport */
  overscan?: number; // default 4

  /** Key extractor (falls back to index) */
  keyExtractor?: (item: T, index: number) => string;

  /** Infinite scroll */
  onEndReached?: () => void;
  onEndReachedThreshold?: number; // 0-1, default 0.5

  /** Style object for positioning (web) or layout (native) */
  style?: StyleProp<ViewProps>;

  asChild?: boolean;
};

type BaseItemProps<T> = ViewPropsUniversal & {
  ref?: React.Ref<any>;
  item: T;
  index: number;
};

/**
 * Shape of the global list context for VirtualizedList
 * Includes the data array and the TanStack Virtualizer instance.
 * Union with null to allow createContext default.
 */
type BaseRootContext = {
  ref: React.RefObject<HTMLDivElement | null>;
  scrollElement: HTMLDivElement | null;
} | null;

/**
 * Shape of the per-item context for each virtual slot
 */
interface BaseItemContext<T = any> {
  /** The actual item data for this slot */
  item: T;
  /** Index of the item in the data array */
  index: number;
}

export type {
  BaseItemContext,
  BaseItemProps,
  BaseRootContext,
  BaseListProps,
  BaseRootProps,
  BaseVirtualizedListHandle,
};
