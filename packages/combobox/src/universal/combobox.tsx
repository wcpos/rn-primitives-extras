import {
  Empty as EmptyNative,
  Input as InputNative,
  Item as ItemNative,
  ItemText as ItemTextNative,
  List as ListNative,
  Root as RootNative,
  Trigger as TriggerNative,
  Value as ValueNative,
  type ItemProps as ItemPropsNative,
} from '../native';
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

function Item({ ref, web: _web, native, ...props }: ItemProps) {
  return <ItemNative ref={ref as ItemPropsNative['ref']} {...props} {...native} />;
}

function ItemText({ web: _web, native, ...props }: ItemTextProps) {
  return <ItemTextNative {...props} {...native} />;
}

export { Empty, Input, Item, ItemText, List, Root, Trigger, Value };
