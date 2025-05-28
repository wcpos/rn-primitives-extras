import type {
  BaseEmptyProps,
  BaseInputProps,
  BaseItemProps,
  BaseListProps,
  BaseRootProps,
  BaseTriggerProps,
  BaseValueProps,
} from '../base-types';

type RootProps = BaseRootProps & RootPropsWebOnly;
type RootPropsWebOnly = {};

type TriggerProps = BaseTriggerProps & TriggerPropsWebOnly;
type TriggerPropsWebOnly = {};

type ValueProps = BaseValueProps & ValuePropsWebOnly;
type ValuePropsWebOnly = {};

type InputProps = BaseInputProps & InputPropsWebOnly;
type InputPropsWebOnly = Omit<React.ComponentProps<'input'>, 'value' | 'placeholder'>;

type ListProps<T> = BaseListProps<T> & ListPropsWebOnly;
type ListPropsWebOnly = {};

type EmptyProps = BaseEmptyProps & EmptyPropsWebOnly;
type EmptyPropsWebOnly = {};

type ItemProps = BaseItemProps & ItemPropsWebOnly;
type ItemPropsWebOnly = {};

export type {
  EmptyProps,
  EmptyPropsWebOnly,
  InputProps,
  InputPropsWebOnly,
  ItemProps,
  ItemPropsWebOnly,
  ListProps,
  ListPropsWebOnly,
  RootProps,
  RootPropsWebOnly,
  TriggerProps,
  TriggerPropsWebOnly,
  ValueProps,
  ValuePropsWebOnly,
};
