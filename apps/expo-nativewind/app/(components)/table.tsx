import { Stack } from 'expo-router';
import * as React from 'react';
import { Alert, FlatList, ScrollView, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { Text } from '~/components/ui/text';
import { ChevronDown } from '~/lib/icons/ChevronDown';
import { cn } from '~/lib/utils';

const MIN_COLUMN_WIDTHS = [120, 120, 100, 120];

export default function TableScreen() {
  const { width } = useWindowDimensions();
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const insets = useSafeAreaInsets();

  const columnWidths = React.useMemo(() => {
    return MIN_COLUMN_WIDTHS.map((minWidth) => {
      const evenWidth = width / MIN_COLUMN_WIDTHS.length;
      return evenWidth > minWidth ? evenWidth : minWidth;
    });
  }, [width]);

  return (
    <>
      <Stack.Screen options={{ headerShadowVisible: false }} />
      <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
        <Table />
      </ScrollView>
    </>
  );
}

const INVOICES = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV008',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV009',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV0010',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV0011',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV0012',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV0013',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV0014',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV0015',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV0016',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV0017',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV0018',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV0019',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV0020',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV0021',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];
