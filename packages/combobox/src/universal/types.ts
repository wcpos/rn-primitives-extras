import type { PressablePropsUniversal, TextPropsUniversal } from '@rn-primitives/core';
import { Prettify } from '@rn-primitives/types';
import type {
  BaseEmptyProps,
  BaseInputProps,
  BaseItemProps,
  BaseItemTextProps,
  BaseListProps,
  BaseRootProps,
  BaseTriggerProps,
  BaseValueProps,
} from '../base-types';
import type {
  EmptyPropsNativeOnly,
  InputPropsNativeOnly,
  ItemPropsNativeOnly,
  ItemTextPropsNativeOnly,
  RootPropsNativeOnly,
  TriggerPropsNativeOnly,
  ValuePropsNativeOnly,
} from '../native/types';
import type {
  EmptyPropsWebOnly,
  InputPropsWebOnly,
  ItemPropsWebOnly,
  ItemTextPropsWebOnly,
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

type ItemProps = Prettify<
  BaseItemProps & PressablePropsUniversal & { native?: ItemPropsNativeOnly; web?: ItemPropsWebOnly }
>;

type ItemTextProps = Prettify<
  BaseItemTextProps &
    TextPropsUniversal & { native?: ItemTextPropsNativeOnly; web?: ItemTextPropsWebOnly }
>;

export type {
  EmptyProps,
  InputProps,
  ItemProps,
  ItemTextProps,
  ListProps,
  RootProps,
  TriggerProps,
  ValueProps,
};
