import { Pressable, Text, View } from '@rn-primitives/core/dist/native';
import { useControllableState } from '@rn-primitives/hooks';
import * as VirtualizedListPrimitive from '@rn-primitives/virtualized-list';
import React from 'react';
import { TextInput } from 'react-native';
import { Option } from '../base-types';
import { RootContext, useRootContext } from '../utils/contexts';
import { defaultFilter } from '../utils/filter';
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
      }}
    >
      {children}
    </RootContext.Provider>
  );
}

function Trigger(props: TriggerProps) {
  return (
    <View>
      <Text>Combobox</Text>
    </View>
  );
}

function Value(props: ValueProps) {
  return (
    <View>
      <Text>Combobox</Text>
    </View>
  );
}

function Input(props: InputProps) {
  const { onFilterChange } = useRootContext();
  const [isPending, startTransition] = React.useTransition();
  const [inputValue, setInputValue] = React.useState('');

  const handleChangeText = React.useCallback(
    (currentText: string) => {
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
    <TextInput
      {...props}
      value={inputValue}
      onChangeText={handleChangeText}
      aria-busy={isPending}
    />
  );
}

function List({
  data,
  estimatedItemSize,
  shouldFilter = true,
  filter = defaultFilter,
  ...restVirtualizedListProps
}: ListProps<Option>) {
  const { filterValue } = useRootContext();

  const filteredData = React.useMemo(() => {
    if (!shouldFilter || !filterValue) {
      return data;
    }
    const dataToFilter = data ? [...data] : [];
    return filter(dataToFilter, filterValue);
  }, [data, filterValue, shouldFilter, filter]);

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

function Empty({ children, ...props }: EmptyProps) {
  return (
    <View {...props}>
      <Text>{children}</Text>
    </View>
  );
}

function Item({ value, label, ...props }: ItemProps) {
  const { value: selectedValue, onValueChange } = useRootContext();

  return (
    <VirtualizedListPrimitive.Item>
      <Pressable onPress={() => onValueChange({ value, label })} {...props} />
    </VirtualizedListPrimitive.Item>
  );
}

function ItemText(props: ItemTextProps) {
  const { item } = VirtualizedListPrimitive.useItemContext();

  return <Text {...props}>{item.label}</Text>;
}

export { Empty, Input, Item, ItemText, List, Root, Trigger, Value };
