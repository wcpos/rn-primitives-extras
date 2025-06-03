import type { ListProps as VirtualizedListPrimitiveProps } from '@rn-primitives/virtualized-list';

export interface Option {
  value: string | number;
  label: string;
}

interface BaseRootContext {
  value: Option | undefined;
  onValueChange: (option: Option | undefined) => void;
  disabled?: boolean;
  filterValue: string;
  onFilterChange: (text: string) => void;
}

type BaseRootProps = {
  children: React.ReactNode;
  value?: Option;
  defaultValue?: Option;
  onValueChange?: (option: Option | undefined) => void;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
};

type BaseTriggerProps = {};

type BaseValueProps = {
  placeholder: string;
};

type BaseInputProps = {
  value?: string;
  placeholder?: string;
};

export type BaseListProps<T> = Omit<VirtualizedListPrimitiveProps<T>, 'data'> & {
  data: ReadonlyArray<T>;
  shouldFilter?: boolean;
};

type BaseEmptyProps = {
  children: React.ReactNode;
};

type BaseItemProps = {
  value: string;
  label: string;
};

type BaseItemTextProps = {};

export type {
  BaseEmptyProps,
  BaseInputProps,
  BaseItemProps,
  BaseItemTextProps,
  BaseRootContext,
  BaseRootProps,
  BaseTriggerProps,
  BaseValueProps,
};
