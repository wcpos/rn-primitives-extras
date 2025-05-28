import { Text, View } from '@rn-primitives/core/dist/native';
import type {
  EmptyProps,
  InputProps,
  ItemProps,
  ListProps,
  RootProps,
  TriggerProps,
  ValueProps,
} from './types';
import { TextInput } from 'react-native';

function Root(props: RootProps) {
  return (
    <View>
      <Text>Combobox</Text>
    </View>
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
  return <TextInput {...props} />;
}

function List<T>(props: ListProps<T>) {
  return (
    <View>
      <Text>Combobox</Text>
    </View>
  );
}

function Empty(props: EmptyProps) {
  return (
    <View>
      <Text>Combobox</Text>
    </View>
  );
}

function Item(props: ItemProps) {
  return (
    <View>
      <Text>Combobox</Text>
    </View>
  );
}

export { Empty, Input, Item, List, Root, Trigger, Value };
