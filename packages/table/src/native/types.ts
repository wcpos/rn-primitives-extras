import type { ViewProps } from '@rn-primitives/core/dist/native';
import type {
  BaseBodyProps,
  BaseCellProps,
  BaseFooterProps,
  BaseHeaderCellProps,
  BaseHeaderProps,
  BaseRootProps,
  BaseRowProps,
} from '../base-types';

type RootProps = BaseRootProps;
type RootPropsNativeOnly = {};

type HeaderProps = BaseHeaderProps;
type HeaderPropsNativeOnly = {};

type HeaderCellProps = BaseHeaderCellProps;
type HeaderCellPropsNativeOnly = {};

type BodyProps = BaseBodyProps;
type BodyPropsNativeOnly = {};

type RowProps = BaseRowProps;
type RowPropsNativeOnly = {};

type CellProps = BaseCellProps;
type CellPropsNativeOnly = {};

type FooterProps = BaseFooterProps;
type FooterPropsNativeOnly = {};

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
