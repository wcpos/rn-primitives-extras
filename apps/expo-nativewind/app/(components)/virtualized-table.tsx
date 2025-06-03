import { Platform, View } from '@rn-primitives/core';
import { Cell, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Stack } from 'expo-router';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import * as React from 'react';
import { Button } from '~/components/ui/button';
import { TableCell, TableHeaderCell, TableHeaderRow, TableRow } from '~/components/ui/table';
import { Text } from '~/components/ui/text';
import {
  useItemContext,
  Virtualized,
  VirtualizedItem,
  VirtualizedList,
} from '~/components/ui/virtualized-list';
import {
  VirtualizedTable,
  VirtualizedTableBody,
  VirtualizedTableHeader,
} from '~/components/ui/virtualized-table';

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
        <Virtualized
          // relative is required for tanstack table to work on web
          className={Platform.OS === 'web' ? 'relative' : undefined}
        >
          <VirtualizedTable>
            <VirtualizedTableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableHeaderRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHeaderCell key={header.id}>
                      <Text>{String(header.column.columnDef.header)}</Text>
                    </TableHeaderCell>
                  ))}
                </TableHeaderRow>
              ))}
            </VirtualizedTableHeader>
            <VirtualizedList
              data={table.getRowModel().rows}
              estimatedItemSize={30}
              parentComponent={VirtualizedTableBody}
              parentProps={{
                native: {
                  onLayout: (event) => {
                    console.log(event.nativeEvent.layout.height);
                  },
                },
              }}
              renderItem={({ item, index }) => (
                <VirtualizedItem asChild>
                  <TableRow>
                    <Row />
                  </TableRow>
                </VirtualizedItem>
              )}
            />
          </VirtualizedTable>
        </Virtualized>
      </View>
    </>
  );
}

function Row() {
  const { item } = useItemContext();

  return item.getVisibleCells().map((cell: Cell<Row, string>) => {
    return (
      <TableCell
        key={cell.id}
        style={{
          display: 'flex',
          width: cell.column.getSize(),
        }}
      >
        {cell.column.id === 'paymentMethod' ? (
          <ExpandableCell cell={cell} />
        ) : (
          <Text>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Text>
        )}
      </TableCell>
    );
  });
}

function ExpandableCell({ cell }: { cell: Cell<Row, string> }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <View>
      <View className='flex-row items-center gap-2'>
        <Text className='flex-1'>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Text>
        <Button variant='ghost' size='icon' onPress={() => setExpanded(!expanded)}>
          {expanded ? <ChevronUp className='h-4 w-4' /> : <ChevronDown className='h-4 w-4' />}
        </Button>
      </View>
      {expanded && <Text>Expandable content</Text>}
    </View>
  );
}
