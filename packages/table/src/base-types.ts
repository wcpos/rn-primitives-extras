import type { ViewPropsUniversal } from '@rn-primitives/core';
import { StyleProp, ViewStyle } from 'react-native';

type BaseRootProps = Omit<ViewPropsUniversal, 'style'> & { style?: StyleProp<ViewStyle> };

type BaseHeaderProps = Omit<ViewPropsUniversal, 'style'> & { style?: StyleProp<ViewStyle> };

type BaseHeaderCellProps = Omit<ViewPropsUniversal, 'style'> & { style?: StyleProp<ViewStyle> };

type BaseBodyProps = Omit<ViewPropsUniversal, 'style'> & { style?: StyleProp<ViewStyle> };

type BaseRowProps = Omit<ViewPropsUniversal, 'style'> & { style?: StyleProp<ViewStyle> };

type BaseCellProps = Omit<ViewPropsUniversal, 'style'> & { style?: StyleProp<ViewStyle> };

type BaseFooterProps = Omit<ViewPropsUniversal, 'style'> & { style?: StyleProp<ViewStyle> };

export type {
  BaseRootProps,
  BaseHeaderProps,
  BaseHeaderCellProps,
  BaseBodyProps,
  BaseRowProps,
  BaseCellProps,
  BaseFooterProps,
};
