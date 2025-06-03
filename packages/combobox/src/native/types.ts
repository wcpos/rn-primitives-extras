import type { PressableProps, TextProps, ViewProps } from '@rn-primitives/core/dist/native';
import type { TextInputProps } from 'react-native';
import type {
  BaseEmptyProps,
  BaseInputProps,
  BaseItemProps,
  BaseItemTextProps,
  BaseListProps,
  BaseRootProps,
  BaseTriggerProps,
  BaseValueProps,
  Option,
} from '../base-types';

type RootProps = BaseRootProps & RootPropsNativeOnly;
type RootPropsNativeOnly = {};

type TriggerProps = BaseTriggerProps & TriggerPropsNativeOnly;
type TriggerPropsNativeOnly = {};

type ValueProps = BaseValueProps & ValuePropsNativeOnly;
type ValuePropsNativeOnly = {};

type InputProps = BaseInputProps & InputPropsNativeOnly;
type InputPropsNativeOnly = Omit<TextInputProps, 'value' | 'placeholder'>;

type ListProps<TItem extends Option = Option> = BaseListProps<TItem> & ListPropsNativeOnly;
type ListPropsNativeOnly = {};

type EmptyProps = BaseEmptyProps & EmptyPropsNativeOnly;
type EmptyPropsNativeOnly = ViewProps;

type ItemProps = BaseItemProps & ItemPropsNativeOnly;
type ItemPropsNativeOnly = PressableProps;

type ItemTextProps = BaseItemTextProps & ItemTextPropsNativeOnly;
type ItemTextPropsNativeOnly = TextProps;

export type {
  EmptyProps,
  EmptyPropsNativeOnly,
  InputProps,
  InputPropsNativeOnly,
  ItemProps,
  ItemPropsNativeOnly,
  ItemTextProps,
  ItemTextPropsNativeOnly,
  ListProps,
  ListPropsNativeOnly,
  RootProps,
  RootPropsNativeOnly,
  TriggerProps,
  TriggerPropsNativeOnly,
  ValueProps,
  ValuePropsNativeOnly,
};
