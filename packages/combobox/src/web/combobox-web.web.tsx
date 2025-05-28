import type {
  EmptyProps,
  InputProps,
  ItemProps,
  ListProps,
  RootProps,
  TriggerProps,
  ValueProps,
} from './types';
import * as VirtualizedList from '@rn-primitives/virtualized-list';

function Root({ children, ...props }: RootProps) {
  return <>{children}</>;
}

function Trigger(props: TriggerProps) {
  return <div>Combobox</div>;
}

function Value(props: ValueProps) {
  return <div>Combobox</div>;
}

function Input(props: InputProps) {
  return <input type='search' {...props} />;
}

function List<T>(props: ListProps<T>) {
  return (
    <VirtualizedList.Root>
      <VirtualizedList.List {...props} />
    </VirtualizedList.Root>
  );
}

function Empty({ children }: EmptyProps) {
  return <div>{children}</div>;
}

function Item(props: ItemProps) {
  return <VirtualizedList.Item {...props} />;
}

export { Empty, Input, Item, List, Root, Trigger, Value };
