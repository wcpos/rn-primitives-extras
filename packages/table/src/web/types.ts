import * as React from 'react';
import type {
  BaseHeaderProps,
  BaseHeaderCellProps,
  BaseBodyProps,
  BaseRootProps,
  BaseRowProps,
  BaseCellProps,
  BaseFooterProps,
} from '../base-types';

type RootProps = BaseRootProps & React.ComponentProps<'table'>;
type RootPropsWebOnly = React.ComponentProps<'table'>;

type HeaderProps = BaseHeaderProps & React.ComponentProps<'thead'>;
type HeaderPropsWebOnly = React.ComponentProps<'thead'>;

type HeaderCellProps = BaseHeaderCellProps & React.ComponentProps<'th'>;
type HeaderCellPropsWebOnly = React.ComponentProps<'th'>;

type BodyProps = BaseBodyProps & React.ComponentProps<'tbody'>;
type BodyPropsWebOnly = React.ComponentProps<'tbody'>;

type RowProps = BaseRowProps & React.ComponentProps<'tr'>;
type RowPropsWebOnly = React.ComponentProps<'tr'>;

type CellProps = BaseCellProps & React.ComponentProps<'td'>;
type CellPropsWebOnly = React.ComponentProps<'td'>;

type FooterProps = BaseFooterProps & React.ComponentProps<'tfoot'>;
type FooterPropsWebOnly = React.ComponentProps<'tfoot'>;

export type {
  RootProps,
  RootPropsWebOnly,
  HeaderProps,
  HeaderPropsWebOnly,
  HeaderCellProps,
  HeaderCellPropsWebOnly,
  BodyProps,
  BodyPropsWebOnly,
  RowProps,
  RowPropsWebOnly,
  CellProps,
  CellPropsWebOnly,
  FooterProps,
  FooterPropsWebOnly,
};
