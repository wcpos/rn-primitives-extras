import { Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import {
  VirtualizedList,
  useItemContext,
  VirtualizedListItem,
  VirtualizedListList,
} from '~/components/ui/virtualized-list';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from '~/components/ui/table';

interface Row {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

const DATA: Row[] = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
];

export default function VirtualizedListScreen() {
  const table = useReactTable<Row>({
    columns: [
      {
        header: 'Invoice',
        accessorKey: 'invoice',
      },
      {
        header: 'Payment Status',
        accessorKey: 'paymentStatus',
      },
      {
        header: 'Total Amount',
        accessorKey: 'totalAmount',
      },
      {
        header: 'Payment Method',
        accessorKey: 'paymentMethod',
      },
    ],
    data: DATA,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Stack.Screen options={{ headerShadowVisible: false }} />
      <View>
        <Table className='h-full'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHeaderRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell key={header.id}>
                    <Text>{String(header.column.columnDef.header)}</Text>
                  </TableHeaderCell>
                ))}
              </TableHeaderRow>
            ))}
          </TableHeader>
          <VirtualizedList asChild>
            <TableBody>
              <VirtualizedListList data={table.getRowModel().rows} estimatedItemSize={24}>
                <VirtualizedListItem asChild>
                  <TableRow>
                    <Row />
                  </TableRow>
                </VirtualizedListItem>
              </VirtualizedListList>
            </TableBody>
          </VirtualizedList>
        </Table>
      </View>
    </>
  );
}

function Row() {
  const { item } = useItemContext();
  return (
    <View>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
}
