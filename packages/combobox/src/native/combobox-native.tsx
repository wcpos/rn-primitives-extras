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

function Root(props: RootProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Root` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

function Trigger(props: TriggerProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Trigger` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

function Value(props: ValueProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Value` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

function Input(props: InputProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Input` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

function List<T>(props: ListProps<T>) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`List` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

function Empty(props: EmptyProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Empty` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

function Item(props: ItemProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Item` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

function ItemText(props: ItemTextProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`ItemText` from @rn-primitives/combobox/native is only supported on native.');
  }
  return null;
}

export { Empty, Input, Item, ItemText, List, Root, Trigger, Value };
