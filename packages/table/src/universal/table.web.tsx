import {
  Body as BodyWeb,
  Cell as CellWeb,
  FooterCell as FooterCellWeb,
  FooterRow as FooterRowWeb,
  Footer as FooterWeb,
  HeaderCell as HeaderCellWeb,
  HeaderRow as HeaderRowWeb,
  Header as HeaderWeb,
  Root as RootWeb,
  Row as RowWeb,
} from '../web';
import type {
  BodyProps,
  CellProps,
  FooterProps,
  HeaderCellProps,
  HeaderProps,
  RootProps,
  RowProps,
} from './types';

function Root({ native: _native, web, ...props }: RootProps) {
  return <RootWeb {...props} {...web} />;
}

function Header({ native: _native, web, ...props }: HeaderProps) {
  return <HeaderWeb {...props} {...web} />;
}

function HeaderRow({ native: _native, web, ...props }: RowProps) {
  return <HeaderRowWeb {...props} {...web} />;
}

function HeaderCell({ native: _native, web, ...props }: HeaderCellProps) {
  return <HeaderCellWeb {...props} {...web} />;
}

function Body({ native: _native, web, ...props }: BodyProps) {
  return <BodyWeb {...props} {...web} />;
}

function Row({ native: _native, web, ...props }: RowProps) {
  return <RowWeb {...props} {...web} />;
}

function Cell({ native: _native, web, ...props }: CellProps) {
  return <CellWeb {...props} {...web} />;
}

function Footer({ native: _native, web, ...props }: FooterProps) {
  return <FooterWeb {...props} {...web} />;
}

function FooterRow({ native: _native, web, ...props }: RowProps) {
  return <FooterRowWeb {...props} {...web} />;
}

function FooterCell({ native: _native, web, ...props }: HeaderCellProps) {
  return <FooterCellWeb {...props} {...web} />;
}

export { Body, Cell, Footer, FooterCell, FooterRow, Header, HeaderCell, HeaderRow, Root, Row };
