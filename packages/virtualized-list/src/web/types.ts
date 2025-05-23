import type { BaseRootProps, BaseItemProps } from '../base-types';

type RootProps<T> = BaseRootProps<T> & RootPropsWebOnly;

type RootPropsWebOnly = React.ComponentProps<'div'>;

type ItemProps<T> = BaseItemProps<T> & ItemPropsWebOnly;

type ItemPropsWebOnly = React.ComponentProps<'div'>;

export type { RootProps, RootPropsWebOnly, ItemProps, ItemPropsWebOnly };
