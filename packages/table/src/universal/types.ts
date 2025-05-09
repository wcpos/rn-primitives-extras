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

type RootProps = Prettify<
  BaseRootProps & {
    native?: RootPropsNativeOnly;
    web?: RootPropsWebOnly;
  }
>;

type HeaderProps = Prettify<
  BaseHeaderProps & {
    native?: HeaderPropsNativeOnly;
    web?: HeaderPropsWebOnly;
  }
>;

type HeaderCellProps = Prettify<
  BaseHeaderCellProps & {
    native?: HeaderCellPropsNativeOnly;
    web?: HeaderCellPropsWebOnly;
  }
>;

type BodyProps = Prettify<
  BaseBodyProps & {
    native?: BodyPropsNativeOnly;
    web?: BodyPropsWebOnly;
  }
>;

type RowProps = Prettify<
  BaseRowProps & {
    native?: RowPropsNativeOnly;
    web?: RowPropsWebOnly;
  }
>;

type CellProps = Prettify<
  BaseCellProps & {
    native?: CellPropsNativeOnly;
    web?: CellPropsWebOnly;
  }
>;

type FooterProps = Prettify<
  BaseFooterProps & {
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
