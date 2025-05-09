import {
  Root as RootNative,
  Header as HeaderNative,
  HeaderRow as HeaderRowNative,
  HeaderCell as HeaderCellNative,
  Body as BodyNative,
  Row as RowNative,
  Cell as CellNative,
  Footer as FooterNative,
  FooterRow as FooterRowNative,
  FooterCell as FooterCellNative,
} from '../native';
import type {
  HeaderProps,
  HeaderCellProps,
  RowProps,
  RootProps,
  BodyProps,
  CellProps,
  FooterProps,
} from './types';

function Root({ web: _web, native, ...props }: RootProps) {
  return <RootNative {...props} {...native} />;
}

function Header({ web: _web, native, ...props }: HeaderProps) {
  return <HeaderNative {...props} {...native} />;
}

function HeaderRow({ web: _web, native, ...props }: RowProps) {
  return <HeaderRowNative {...props} {...native} />;
}

function HeaderCell({ web: _web, native, ...props }: HeaderCellProps) {
  return <HeaderCellNative {...props} {...native} />;
}

function Body({ web: _web, native, ...props }: BodyProps) {
  return <BodyNative {...props} {...native} />;
}

function Row({ web: _web, native, ...props }: RowProps) {
  return <RowNative {...props} {...native} />;
}

function Cell({ web: _web, native, ...props }: CellProps) {
  return <CellNative {...props} {...native} />;
}

function Footer({ web: _web, native, ...props }: FooterProps) {
  return <FooterNative {...props} {...native} />;
}

function FooterRow({ web: _web, native, ...props }: RowProps) {
  return <FooterRowNative {...props} {...native} />;
}

function FooterCell({ web: _web, native, ...props }: HeaderCellProps) {
  return <FooterCellNative {...props} {...native} />;
}

export { Root, Header, HeaderRow, HeaderCell, Body, Row, Cell, Footer, FooterRow, FooterCell };
