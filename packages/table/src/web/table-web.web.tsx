import { View } from '@rn-primitives/core/dist/web';
import {
  BodyProps,
  CellProps,
  FooterProps,
  HeaderCellProps,
  HeaderProps,
  RootProps,
  RowProps,
} from './types';

function Root(props: RootProps) {
  return <View as='table' {...props} />;
}

function Header(props: HeaderProps) {
  return <View as='thead' {...props} />;
}

function HeaderRow(props: RowProps) {
  return <View as='tr' {...props} />;
}

function HeaderCell(props: HeaderCellProps) {
  return <View as='th' {...props} />;
}

function Body(props: BodyProps) {
  return <View as='tbody' {...props} />;
}

function Row(props: RowProps) {
  return <View as='tr' {...props} />;
}

function Cell(props: CellProps) {
  return <View as='td' {...props} />;
}

function Footer(props: FooterProps) {
  return <View as='tfoot' {...props} />;
}

function FooterRow(props: RowProps) {
  return <View as='tr' {...props} />;
}

function FooterCell(props: HeaderCellProps) {
  return <View as='th' {...props} />;
}

export { Body, Cell, Footer, FooterCell, FooterRow, Header, HeaderCell, HeaderRow, Root, Row };
