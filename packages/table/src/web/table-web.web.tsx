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

function HeaderRow({ style, ...props }: RowProps) {
  return <View as='tr' style={{ flexDirection: 'row', ...style }} {...props} />;
}

function HeaderCell({ style, ...props }: HeaderCellProps) {
  return <View as='th' style={{ flex: 1, ...style }} {...props} />;
}

function Body(props: BodyProps) {
  return <View as='tbody' {...props} />;
}

function Row({ style, ...props }: RowProps) {
  return <View as='tr' style={{ flexDirection: 'row', ...style }} {...props} />;
}

function Cell({ style, ...props }: CellProps) {
  return <View as='td' style={{ flex: 1, ...style }} {...props} />;
}

function Footer(props: FooterProps) {
  return <View as='tfoot' {...props} />;
}

function FooterRow({ style, ...props }: RowProps) {
  return <View as='tr' style={{ flexDirection: 'row', ...style }} {...props} />;
}

function FooterCell({ style, ...props }: HeaderCellProps) {
  return <View as='th' style={{ flex: 1, ...style }} {...props} />;
}

export { Body, Cell, Footer, FooterCell, FooterRow, Header, HeaderCell, HeaderRow, Root, Row };
