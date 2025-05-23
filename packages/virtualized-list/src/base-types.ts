import type { ViewPropsUniversal } from '@rn-primitives/core';

import type { Virtualizer } from '@tanstack/react-virtual';
import type { CSSProperties } from 'react';

interface BaseVirtualizedListHandle {
  scrollToIndex(params: {
    index: number;
    align?: 'start' | 'center' | 'end';
    animated?: boolean;
  }): void;
  scrollToOffset(offset: number, animated?: boolean): void;
}

type BaseRootProps<T> = ViewPropsUniversal & {
  ref?: React.Ref<any>;

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
type BaseRootContext<T = any> = {
  data: T[];
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
} | null;

/**
 * Shape of the per-item context for each virtual slot
 */
interface BaseItemContext<T = any> {
  /** The actual item data for this slot */
  item: T;
  /** Index of the item in the data array */
  index: number;
  /** Style object for positioning (web) or layout (native) */
  style?: CSSProperties;
}

export type {
  BaseItemContext,
  BaseItemProps,
  BaseRootContext,
  BaseRootProps,
  BaseVirtualizedListHandle,
};
