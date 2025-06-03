import type { Option } from '../base-types';
import type {
  EmptyProps,
  InputProps,
  ItemProps,
  ItemTextProps,
  ListProps,
  RootProps,
  TriggerProps,
  ValueProps,
} from './types';

const Root = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Root` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<RootProps>;

const Trigger = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Trigger` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<TriggerProps>;

const Value = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Value` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<ValueProps>;

const Input = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Input` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<InputProps>;

const List = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`List` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<ListProps<Option>>;

const Empty = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Empty` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<EmptyProps>;

const Item = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Item` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<ItemProps>;

const ItemText = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`ItemText` from @rn-primitives/combobox/web is only supported on web.');
  }
  return null;
}) as React.FC<ItemTextProps>;

export { Empty, Input, Item, ItemText, List, Root, Trigger, Value };
