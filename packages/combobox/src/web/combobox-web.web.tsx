import { Pressable, Text } from '@rn-primitives/core/dist/web';
import { useControllableState } from '@rn-primitives/hooks';
import * as VirtualizedListPrimitive from '@rn-primitives/virtualized-list';
import React from 'react';
import type { Option } from '../base-types';
import { RootContext, useRootContext } from '../utils/contexts';
import { filter } from '../utils/filter';
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

function Root({
  children,
  value: valueProp,
  defaultValue,
  onValueChange: onValueChangeProp,
  ...props
}: RootProps) {
  const [value, onValueChange] = useControllableState<Option | undefined>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChangeProp,
  });
  const [filterValue, setFilterValue] = React.useState('');

  return (
    <RootContext.Provider
      value={{
        value,
        onValueChange,
        filterValue,
        onFilterChange: setFilterValue,
        // open,
        // onOpenChange,
        // disabled,
        // contentLayout,
        // nativeID,
        // setContentLayout,
        // setTriggerPosition,
        // triggerPosition,
      }}
    >
      {children}
    </RootContext.Provider>
  );
}

function Trigger(props: TriggerProps) {
  return <div>Combobox</div>;
}

function Value(props: ValueProps) {
  return <div>Combobox</div>;
}

function Input(props: InputProps) {
  const { value: selectedValue, onFilterChange } = useRootContext();
  const [isPending, startTransition] = React.useTransition();
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const currentText = event.target.value;
      setInputValue(currentText);

      startTransition(() => {
        if (onFilterChange) {
          onFilterChange(currentText);
        }
      });
    },
    [onFilterChange, startTransition]
  );

  return (
    <input
      type='search'
      {...props}
      value={inputValue}
      onChange={handleChange}
      aria-busy={isPending}
    />
  );
}

function List({
  data,
  estimatedItemSize,
  shouldFilter = true,
  ...restVirtualizedListProps
}: ListProps<Option>) {
  const { filterValue } = useRootContext();

  const filteredData =
    shouldFilter && filterValue ? filter(data ? [...data] : [], filterValue) : data;

  return (
    <VirtualizedListPrimitive.Root>
      <VirtualizedListPrimitive.List
        data={filteredData}
        estimatedItemSize={estimatedItemSize}
        {...restVirtualizedListProps}
      />
    </VirtualizedListPrimitive.Root>
  );
}

function Empty({ children }: EmptyProps) {
  return <div>{children}</div>;
}

function Item({ value, label, asChild, ...props }: ItemProps) {
  const { value: selectedValue, onValueChange } = useRootContext();

  return (
    <VirtualizedListPrimitive.Item>
      <Pressable onClick={() => onValueChange({ value, label })} {...props} />
    </VirtualizedListPrimitive.Item>
  );
}

function ItemText(props: ItemTextProps) {
  const { item } = VirtualizedListPrimitive.useItemContext();

  return <Text {...props}>{item.label}</Text>;
}

export { Empty, Input, Item, ItemText, List, Root, Trigger, Value };
