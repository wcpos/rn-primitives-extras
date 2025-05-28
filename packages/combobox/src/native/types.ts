import type {
  BaseEmptyProps,
  BaseInputProps,
  BaseItemProps,
  BaseListProps,
  BaseRootProps,
  BaseTriggerProps,
  BaseValueProps,
} from '../base-types';
import type { TextInputProps } from 'react-native';

type RootProps = BaseRootProps & RootPropsNativeOnly;
type RootPropsNativeOnly = {};

type TriggerProps = BaseTriggerProps & TriggerPropsNativeOnly;
type TriggerPropsNativeOnly = {};

type ValueProps = BaseValueProps & ValuePropsNativeOnly;
type ValuePropsNativeOnly = {};

type InputProps = BaseInputProps & InputPropsNativeOnly;
type InputPropsNativeOnly = Omit<TextInputProps, 'value' | 'placeholder'>;

type ListProps<T> = BaseListProps<T> & ListPropsNativeOnly;
type ListPropsNativeOnly = {};

type EmptyProps = BaseEmptyProps & EmptyPropsNativeOnly;
type EmptyPropsNativeOnly = {};

type ItemProps = BaseItemProps & ItemPropsNativeOnly;
type ItemPropsNativeOnly = {};

export type {
  EmptyProps,
  EmptyPropsNativeOnly,
  InputProps,
  InputPropsNativeOnly,
  ItemProps,
  ItemPropsNativeOnly,
  ListProps,
  ListPropsNativeOnly,
  RootProps,
  RootPropsNativeOnly,
  TriggerProps,
  TriggerPropsNativeOnly,
  ValueProps,
  ValuePropsNativeOnly,
};
