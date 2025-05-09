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

type RootProps = BaseRootProps &
  ViewProps & {
    isAnimated?: false;
  };
type RootPropsNativeOnly = ViewProps & {
  isAnimated?: false;
};

type HeaderProps = BaseHeaderProps & ViewProps & { isAnimated?: false };
type HeaderPropsNativeOnly = ViewProps & { isAnimated?: false };

type HeaderCellProps = BaseHeaderCellProps & ViewProps & { isAnimated?: false };
type HeaderCellPropsNativeOnly = ViewProps & { isAnimated?: false };

type BodyProps = BaseBodyProps & ViewProps & { isAnimated?: false };
type BodyPropsNativeOnly = ViewProps & { isAnimated?: false };

type RowProps = BaseRowProps & ViewProps & { isAnimated?: false };
type RowPropsNativeOnly = ViewProps & { isAnimated?: false };

type CellProps = BaseCellProps & ViewProps & { isAnimated?: false };
type CellPropsNativeOnly = ViewProps & { isAnimated?: false };

type FooterProps = BaseFooterProps & ViewProps & { isAnimated?: false };
type FooterPropsNativeOnly = ViewProps & { isAnimated?: false };

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
