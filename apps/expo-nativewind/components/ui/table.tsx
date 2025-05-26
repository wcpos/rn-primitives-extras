import * as TablePrimitive from '@rn-primitives/table';
import * as React from 'react';
import { TextClassContext } from '~/components/ui/text';
import { cn } from '~/lib/utils';

const Table = ({ className, ...props }: TablePrimitive.RootProps) => (
  <TablePrimitive.Root className={cn('w-full caption-bottom text-sm', className)} {...props} />
);

const TableHeader = ({ className, ...props }: TablePrimitive.HeaderProps) => (
  <TablePrimitive.Header className={cn('border-border [&_tr]:border-b', className)} {...props} />
);

const TableHeaderRow = ({ className, ...props }: TablePrimitive.RowProps) => (
  <TextClassContext.Provider value='text-muted-foreground'>
    <TablePrimitive.HeaderRow
      className={cn(
        'text-left justify-center font-medium [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  </TextClassContext.Provider>
);

const TableHeaderCell = ({ className, ...props }: TablePrimitive.HeaderCellProps) => (
  <TablePrimitive.HeaderCell
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
);

const TableBody = ({ className, ...props }: TablePrimitive.BodyProps) => (
  <TablePrimitive.Body
    className={cn('flex-1 border-border [&_tr:last-child]:border-0', className)}
    // style={[{ minHeight: 2 }]}
    {...props}
  />
);

const TableRow = ({ className, ...props }: TablePrimitive.RowProps) => (
  <TablePrimitive.Row
    className={cn(
      'border-border border-b web:transition-colors web:hover:bg-muted/50 web:data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
);

const TableCell = ({ className, ...props }: TablePrimitive.CellProps) => (
  <TablePrimitive.Cell
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
);

const TableFooter = ({ className, ...props }: TablePrimitive.FooterProps) => (
  <TablePrimitive.Footer
    className={cn('bg-muted/50 font-medium [&>tr]:last:border-b-0', className)}
    {...props}
  />
);

const TableFooterRow = ({ className, ...props }: TablePrimitive.RowProps) => (
  <TextClassContext.Provider value='text-muted-foreground'>
    <TablePrimitive.FooterRow
      className={cn(
        'h-12 px-4 text-left justify-center font-medium [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  </TextClassContext.Provider>
);

const TableFooterCell = ({ className, ...props }: TablePrimitive.HeaderCellProps) => (
  <TablePrimitive.FooterCell
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
);

export {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableFooterCell,
  TableFooterRow,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
};
