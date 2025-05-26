import type { Virtualizer, VirtualizerOptions } from '@tanstack/react-virtual';
import type { BaseItemProps, BaseListProps, BaseRootProps, BaseItemContext } from '../base-types';

type RootProps = BaseRootProps & RootPropsWebOnly;
type RootPropsWebOnly = React.ComponentProps<'div'>;

type ListProps<T> = BaseListProps<T> & ListPropsWebOnly;
type ListPropsWebOnly = Partial<
  Omit<
    VirtualizerOptions<HTMLDivElement, HTMLDivElement>,
    'count' | 'getScrollElement' | 'estimateSize'
  >
>;

type ItemProps<T> = BaseItemProps<T> & ItemPropsWebOnly;
type ItemPropsWebOnly = React.ComponentProps<'div'>;

type ItemContextType<T> = BaseItemContext<T> & ItemContextWebOnly;
type ItemContextWebOnly = {
  rowVirtualizer: Virtualizer<HTMLDivElement, HTMLDivElement>;
};

export type {
  ItemProps,
  ItemPropsWebOnly,
  RootProps,
  RootPropsWebOnly,
  ListProps,
  ListPropsWebOnly,
  ItemContextType,
};
