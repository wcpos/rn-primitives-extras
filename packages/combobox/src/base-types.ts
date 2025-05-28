import type { ListProps } from '@rn-primitives/virtualized-list';

type Option =
  | {
      value: string;
      label: string;
    }
  | undefined;

type BaseRootProps = {
  children: React.ReactNode;
  value?: Option;
  defaultValue?: Option;
  onValueChange?: (option: Option) => void;
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

type BaseListProps<T> = ListProps<T>;

type BaseEmptyProps = {
  children: React.ReactNode;
};

type BaseItemProps = {
  value: string;
  label: string;
};

export type {
  BaseEmptyProps,
  BaseInputProps,
  BaseItemProps,
  BaseListProps,
  BaseRootProps,
  BaseTriggerProps,
  BaseValueProps,
};
