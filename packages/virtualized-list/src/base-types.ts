import { View } from '@rn-primitives/core';
import type { ViewPropsUniversal } from '@rn-primitives/core';
import type { FlashListProps } from '@shopify/flash-list';

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

  /** Dataset – keep it immutable for perf */
  data: readonly T[];

  // /** Cell renderer – receives the logical index */
  renderItem: NonNullable<FlashListProps<T>['renderItem']>;

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

  /** fallback UI when data.length === 0 */
  ListEmptyComponent?: FlashListProps<T>['ListEmptyComponent'];

  /**
   * The host component you want to use as *the parent* of all your rows.
   * Defaults to View.
   */
  parentComponent?: typeof View;

  /** Any props you’d normally pass to that wrapper. */
  parentProps?: Omit<React.ComponentProps<typeof View>, 'children'>;
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
  BaseListProps,
  BaseRootContext,
  BaseRootProps,
  BaseVirtualizedListHandle,
};
