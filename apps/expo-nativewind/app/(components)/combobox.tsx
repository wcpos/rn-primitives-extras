import { Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '~/components/ui/combobox';

const options = [
  { value: 'AUD', label: 'Australian Dollar' },
  { value: 'BRL', label: 'Brazilian Real' },
  { value: 'CAD', label: 'Canadian Dollar' },
  { value: 'CHF', label: 'Swiss Franc' },
  { value: 'CNY', label: 'Chinese Yuan' },
  { value: 'EUR', label: 'Euro' },
  { value: 'GBP', label: 'British Pound' },
  { value: 'HKD', label: 'Hong Kong Dollar' },
  { value: 'INR', label: 'Indian Rupee' },
  { value: 'JPY', label: 'Japanese Yen' },
  { value: 'KRW', label: 'South Korean Won' },
  { value: 'MXN', label: 'Mexican Peso' },
  { value: 'NOK', label: 'Norwegian Krone' },
  { value: 'NZD', label: 'New Zealand Dollar' },
  { value: 'RUB', label: 'Russian Ruble' },
  { value: 'SAR', label: 'Saudi Riyal' },
  { value: 'SEK', label: 'Swedish Krona' },
  { value: 'SGD', label: 'Singapore Dollar' },
  { value: 'TRY', label: 'Turkish Lira' },
  { value: 'USD', label: 'United States Dollar' },
];

export default function ComboboxScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShadowVisible: false }} />
      <View className='gap-2 h-full'>
        <View className='flex-1'>
          <Combobox
            onValueChange={(val: any) => {
              console.log('onValueChange', val);
            }}
          >
            <ComboboxInput placeholder='Select a currency' />
            <ComboboxList data={options} estimatedItemSize={24}>
              <ComboboxEmpty>No results found</ComboboxEmpty>
            </ComboboxList>
          </Combobox>
        </View>
      </View>
    </>
  );
}
