import {
  Empty as EmptyNative,
  Input as InputNative,
  Item as ItemNative,
  List as ListNative,
  Root as RootNative,
  Trigger as TriggerNative,
  Value as ValueNative,
} from '../native';
import type {
  EmptyProps,
  InputProps,
  ItemProps,
  ListProps,
  RootProps,
  TriggerProps,
  ValueProps,
} from './types';

function Root({ web: _web, native, ...props }: RootProps) {
  return <RootNative {...props} {...native} />;
}

function Trigger({ web: _web, native, ...props }: TriggerProps) {
  return <TriggerNative {...props} {...native} />;
}

function Value({ web: _web, native, ...props }: ValueProps) {
  return <ValueNative {...props} {...native} />;
}

function Input({ web: _web, native, ...props }: InputProps) {
  return <InputNative {...props} {...native} />;
}

function List<T>({ web: _web, native, ...props }: ListProps<T>) {
  return <ListNative {...props} {...native} />;
}

function Empty({ web: _web, native, ...props }: EmptyProps) {
  return <EmptyNative {...props} {...native} />;
}

function Item({ web: _web, native, ...props }: ItemProps) {
  return <ItemNative {...props} {...native} />;
}

export { Empty, Input, Item, List, Root, Trigger, Value };
