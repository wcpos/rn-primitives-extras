import { Platform } from '@rn-primitives/core';
import type { BodyProps, HeaderProps, RootProps } from '@rn-primitives/table';
import { Table, TableBody, TableHeader } from '~/components/ui/table';
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
 * For native: I'm not sure why flex-none is needed here
 */
function VirtualizedTableBody({ className, ...props }: BodyProps) {
  return (
    <TableBody className={cn(Platform.OS === 'web' ? 'grid' : 'flex-none', className)} {...props} />
  );
}

export { VirtualizedTable, VirtualizedTableBody, VirtualizedTableHeader };
