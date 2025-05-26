import { Stack } from 'expo-router';
import * as React from 'react';
import { Platform, View } from '@rn-primitives/core';
import {
  Virtualized,
  useItemContext,
  VirtualizedItem,
  VirtualizedList,
} from '~/components/ui/virtualized-list';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from '~/components/ui/table';
import { cn } from '~/lib/utils';

interface Row {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

function generateRandomInvoiceData(count: number): Row[] {
  const paymentStatuses = ['Paid', 'Pending', 'Overdue', 'Refunded'];
  const paymentMethods = ['Credit Card', 'Debit Card', 'Bank Transfer', 'PayPal', 'Cash'];

  return Array.from({ length: count }, (_, index) => ({
    invoice: `INV${String(index + 1).padStart(4, '0')}`,
    paymentStatus: paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
    totalAmount: `$${(Math.random() * 1000).toFixed(2)}`,
    paymentMethod: paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
  }));
}

const DATA: Row[] = generateRandomInvoiceData(5000);

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
      <View className='h-full'>
        <Virtualized className={cn(Platform.OS === 'web' && 'relative')}>
          <Table className={cn(Platform.OS === 'web' && 'grid')}>
            <TableHeader className={cn(Platform.OS === 'web' && 'grid sticky top-0 z-1')}>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHeaderRow
                  key={headerGroup.id}
                  className={cn(Platform.OS === 'web' && 'flex flex-row w-full')}
                >
                  {headerGroup.headers.map((header) => (
                    <TableHeaderCell
                      key={header.id}
                      className={cn(Platform.OS === 'web' && 'flex basis-1/4')}
                    >
                      <Text>{String(header.column.columnDef.header)}</Text>
                    </TableHeaderCell>
                  ))}
                </TableHeaderRow>
              ))}
            </TableHeader>
            <VirtualizedList data={table.getRowModel().rows} estimatedItemSize={24} asChild>
              <TableBody className={cn('flex-none h-full w-full', Platform.OS === 'web' && 'grid')}>
                <VirtualizedItem asChild>
                  <TableRow className={cn(Platform.OS === 'web' && 'flex flex-row w-full')}>
                    <Row />
                  </TableRow>
                </VirtualizedItem>
              </TableBody>
            </VirtualizedList>
          </Table>
        </Virtualized>
      </View>
    </>
  );
}

function Row() {
  const { item } = useItemContext();

  return item.getVisibleCells().map((cell) => {
    return (
      <TableCell
        key={cell.id}
        style={{
          display: 'flex',
          width: cell.column.getSize(),
        }}
      >
        <Text>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Text>
      </TableCell>
    );
  });
}
