import type { ViewProps } from '@rn-primitives/core/dist/native';
import { Prettify } from '@rn-primitives/types';
import type {
  BaseBodyProps,
  BaseCellProps,
  BaseFooterProps,
  BaseHeaderCellProps,
  BaseHeaderProps,
  BaseRootProps,
  BaseRowProps,
} from '../base-types';

type RootProps = Prettify<BaseRootProps & ViewProps>;
type RootPropsNativeOnly = ViewProps;

type HeaderProps = Prettify<BaseHeaderProps & ViewProps>;
type HeaderPropsNativeOnly = ViewProps;

type HeaderCellProps = Prettify<BaseHeaderCellProps & ViewProps>;
type HeaderCellPropsNativeOnly = ViewProps;

type BodyProps = Prettify<BaseBodyProps & ViewProps>;
type BodyPropsNativeOnly = ViewProps;

type RowProps = Prettify<BaseRowProps & ViewProps>;
type RowPropsNativeOnly = ViewProps;

type CellProps = Prettify<BaseCellProps & ViewProps>;
type CellPropsNativeOnly = ViewProps;

type FooterProps = Prettify<BaseFooterProps & ViewProps>;
type FooterPropsNativeOnly = ViewProps;

export type {
  BodyProps,
  BodyPropsNativeOnly,
  CellProps,
  CellPropsNativeOnly,
  FooterProps,
  FooterPropsNativeOnly,
  HeaderCellProps,
  HeaderCellPropsNativeOnly,
  HeaderProps,
  HeaderPropsNativeOnly,
  RootProps,
  RootPropsNativeOnly,
  RowProps,
  RowPropsNativeOnly,
};
