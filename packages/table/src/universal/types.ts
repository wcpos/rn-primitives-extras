import type { Prettify } from '@rn-primitives/types';
import type {
  HeaderCellPropsNativeOnly,
  HeaderPropsNativeOnly,
  RootPropsNativeOnly,
  RowPropsNativeOnly,
  BodyPropsNativeOnly,
  CellPropsNativeOnly,
  FooterPropsNativeOnly,
} from '../native/types';
import type {
  BodyPropsWebOnly,
  CellPropsWebOnly,
  FooterPropsWebOnly,
  HeaderCellPropsWebOnly,
  HeaderPropsWebOnly,
  RootPropsWebOnly,
  RowPropsWebOnly,
} from '../web/types';
import type {
  BaseBodyProps,
  BaseCellProps,
  BaseFooterProps,
  BaseHeaderCellProps,
  BaseHeaderProps,
  BaseRootProps,
  BaseRowProps,
} from '../base-types';
import type { ViewPropsUniversal } from '@rn-primitives/core';

type RootProps = Prettify<
  BaseRootProps &
    ViewPropsUniversal & {
      native?: RootPropsNativeOnly;
      web?: RootPropsWebOnly;
    }
>;

type HeaderProps = Prettify<
  BaseHeaderProps &
    ViewPropsUniversal & {
      native?: HeaderPropsNativeOnly;
      web?: HeaderPropsWebOnly;
    }
>;

type HeaderCellProps = Prettify<
  BaseHeaderCellProps &
    ViewPropsUniversal & {
      native?: HeaderCellPropsNativeOnly;
      web?: HeaderCellPropsWebOnly;
    }
>;

type BodyProps = Prettify<
  BaseBodyProps &
    ViewPropsUniversal & {
      native?: BodyPropsNativeOnly;
      web?: BodyPropsWebOnly;
    }
>;

type RowProps = Prettify<
  BaseRowProps &
    ViewPropsUniversal & {
      native?: RowPropsNativeOnly;
      web?: RowPropsWebOnly;
    }
>;

type CellProps = Prettify<
  BaseCellProps & {
    native?: CellPropsNativeOnly;
    web?: CellPropsWebOnly;
  }
> &
  ViewPropsUniversal;

type FooterProps = Prettify<
  BaseFooterProps &
    ViewPropsUniversal & {
      native?: FooterPropsNativeOnly;
      web?: FooterPropsWebOnly;
    }
>;

export type {
  RootProps,
  HeaderProps,
  HeaderCellProps,
  BodyProps,
  RowProps,
  CellProps,
  FooterProps,
};
