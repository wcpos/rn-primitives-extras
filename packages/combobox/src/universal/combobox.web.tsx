import { Pressable } from '@rn-primitives/core';
import { mergeProps } from '@rn-primitives/utils';
import {
  Empty as EmptyWeb,
  Input as InputWeb,
  ItemText as ItemTextWeb,
  Item as ItemWeb,
  List as ListWeb,
  Root as RootWeb,
  Trigger as TriggerWeb,
  Value as ValueWeb,
} from '../web';
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

function Root({ native: _native, web, ...props }: RootProps) {
  return <RootWeb {...props} {...web} />;
}

function Trigger({ native: _native, web, ...props }: TriggerProps) {
  return <TriggerWeb {...props} {...web} />;
}

function Value({ native: _native, web, ...props }: ValueProps) {
  return <ValueWeb {...props} {...web} />;
}

function Input({ native: _native, web, ...props }: InputProps) {
  return <InputWeb {...props} {...web} />;
}

function List<T>({ native: _native, web, ...props }: ListProps<T>) {
  return <ListWeb {...props} {...web} />;
}

function Empty({ native: _native, web, ...props }: EmptyProps) {
  return <EmptyWeb {...props} {...web} />;
}

const DEFAULT_PRESSABLE_WEB = { as: 'div' } as const;

function Item({ value, label, native: _native, web, ...props }: ItemProps) {
  return (
    <ItemWeb value={value} label={label} asChild>
      <Pressable web={mergeProps(DEFAULT_PRESSABLE_WEB, web)} {...props} />
    </ItemWeb>
  );
}

function ItemText({ native: _native, web, ...props }: ItemTextProps) {
  return <ItemTextWeb {...props} {...web} />;
}

export { Empty, Input, Item, ItemText, List, Root, Trigger, Value };
