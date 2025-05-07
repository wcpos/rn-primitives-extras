import type { StyleProp, ViewStyle } from 'react-native';

interface BaseVirtualizedListHandle {
  scrollToIndex(params: {
    index: number;
    align?: 'start' | 'center' | 'end';
    animated?: boolean;
  }): void;
  scrollToOffset(offset: number, animated?: boolean): void;
}

interface BaseVirtualizedListProps<T> {
  /** Ref to the list */
  ref: React.Ref<BaseVirtualizedListHandle>;

  /** Dataset – keep it immutable for perf */
  data: readonly T[];

  /** Cell renderer – receives the logical index */
  renderItem: (params: { item: T; index: number }) => React.ReactElement | null;

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

  /** Style to apply to the list */
  style?: StyleProp<ViewStyle>;
}

export type { BaseVirtualizedListProps, BaseVirtualizedListHandle };
