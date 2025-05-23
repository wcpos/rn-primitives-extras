import { Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { VirtualizedList } from '~/components/ui/virtualized-list';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import type { VirtualizedListHandle } from '~/components/ui/virtualized-list';
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
  const listRef = React.useRef<VirtualizedListHandle>(null);

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
          <TableBody className='flex-1'>
            <VirtualizedList
              ref={listRef}
              data={table.getRowModel().rows}
              renderItem={(row) => {
                return (
                  <TableRow>
                    <TableCell>
                      <Text>{JSON.stringify(row)}</Text>
                    </TableCell>
                  </TableRow>
                );
              }}
              estimatedItemSize={24}
            />
          </TableBody>
        </Table>
      </View>
    </>
  );
}
