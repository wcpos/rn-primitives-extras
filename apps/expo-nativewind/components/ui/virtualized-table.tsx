import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from '~/components/ui/table';
import { Platform } from '@rn-primitives/core';
import type { HeaderProps, RootProps, BodyProps } from '@rn-primitives/table';
import { cn } from '~/lib/utils';

/*
 * For web:
 * Even though we're still using sematic table tags, we must use CSS grid and flexbox for dynamic row heights
 *
 * See: https://tanstack.com/table/latest/docs/framework/react/examples/virtualized-rows
 */
function VirtualizedTable({ className, ...props }: RootProps) {
  return <Table className={cn(Platform.OS === 'web' && 'grid', className)} {...props} />;
}

function VirtualizedTableHeader({ className, ...props }: HeaderProps) {
  return (
    <TableHeader
      className={cn(Platform.OS === 'web' && 'grid sticky top-0 z-10 bg-white', className)}
      {...props}
    />
  );
}

/**
 * For native: I'm not sure why flex-none is needed here, but FlashList want a h-full
 */
function VirtualizedTableBody({ className, ...props }: BodyProps) {
  return (
    <TableBody
      className={cn(Platform.OS === 'web' ? 'grid' : 'flex-none h-full', className)}
      {...props}
    />
  );
}

export { VirtualizedTable, VirtualizedTableHeader, VirtualizedTableBody };
