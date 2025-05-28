import { Prettify } from '@rn-primitives/types';
import type {
  BaseEmptyProps,
  BaseInputProps,
  BaseItemProps,
  BaseListProps,
  BaseRootProps,
  BaseTriggerProps,
  BaseValueProps,
} from '../base-types';
import type {
  EmptyPropsNativeOnly,
  InputPropsNativeOnly,
  ItemPropsNativeOnly,
  ListPropsNativeOnly,
  RootPropsNativeOnly,
  TriggerPropsNativeOnly,
  ValuePropsNativeOnly,
} from '../native/types';
import type {
  EmptyPropsWebOnly,
  InputPropsWebOnly,
  ItemPropsWebOnly,
  ListPropsWebOnly,
  RootPropsWebOnly,
  TriggerPropsWebOnly,
  ValuePropsWebOnly,
} from '../web/types';

type RootProps = Prettify<BaseRootProps & { native?: RootPropsNativeOnly; web?: RootPropsWebOnly }>;

type TriggerProps = Prettify<
  BaseTriggerProps & { native?: TriggerPropsNativeOnly; web?: TriggerPropsWebOnly }
>;

type ValueProps = Prettify<
  BaseValueProps & { native?: ValuePropsNativeOnly; web?: ValuePropsWebOnly }
>;

type InputProps = Prettify<
  BaseInputProps & { native?: InputPropsNativeOnly; web?: InputPropsWebOnly }
>;

type ListProps<T> = BaseListProps<T>;

type EmptyProps = Prettify<
  BaseEmptyProps & { native?: EmptyPropsNativeOnly; web?: EmptyPropsWebOnly }
>;

type ItemProps = Prettify<BaseItemProps & { native?: ItemPropsNativeOnly; web?: ItemPropsWebOnly }>;

export type { EmptyProps, InputProps, ItemProps, ListProps, RootProps, TriggerProps, ValueProps };
