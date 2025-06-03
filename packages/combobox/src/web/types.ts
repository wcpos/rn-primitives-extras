import type { PressableProps } from '@rn-primitives/core/dist/web';
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

type RootProps = BaseRootProps & RootPropsWebOnly;
type RootPropsWebOnly = {};

type TriggerProps = BaseTriggerProps & TriggerPropsWebOnly;
type TriggerPropsWebOnly = {};

type ValueProps = BaseValueProps & ValuePropsWebOnly;
type ValuePropsWebOnly = {};

type InputProps = BaseInputProps & InputPropsWebOnly;
type InputPropsWebOnly = Omit<React.ComponentProps<'input'>, 'value' | 'placeholder'>;

type ListProps<TItem extends Option = Option> = BaseListProps<TItem> & ListPropsWebOnly;
type ListPropsWebOnly = {};

type EmptyProps = BaseEmptyProps & EmptyPropsWebOnly;
type EmptyPropsWebOnly = {};

type ItemProps = BaseItemProps & PressableProps<'div'>;
type ItemPropsWebOnly = React.ComponentProps<'div'>;

type ItemTextProps = BaseItemTextProps & ItemTextPropsWebOnly;
type ItemTextPropsWebOnly = {};

export type {
  EmptyProps,
  EmptyPropsWebOnly,
  InputProps,
  InputPropsWebOnly,
  ItemProps,
  ItemPropsWebOnly,
  ItemTextProps,
  ItemTextPropsWebOnly,
  ListProps,
  ListPropsWebOnly,
  RootProps,
  RootPropsWebOnly,
  TriggerProps,
  TriggerPropsWebOnly,
  ValueProps,
  ValuePropsWebOnly,
};
