import {
  Empty as EmptyWeb,
  Input as InputWeb,
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

function Item({ native: _native, web, ...props }: ItemProps) {
  return <ItemWeb {...props} {...web} />;
}

export { Empty, Input, Item, List, Root, Trigger, Value };
