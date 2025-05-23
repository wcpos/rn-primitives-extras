import { View, Text } from '@rn-primitives/core/dist/native';
import type {
  RootProps,
  BodyProps,
  CellProps,
  FooterProps,
  HeaderCellProps,
  HeaderProps,
  RowProps,
} from './types';

const Root = (props: RootProps) => {
  return <View {...props} />;
};

const Header = (props: HeaderProps) => {
  return <View {...props} />;
};

const HeaderRow = (props: RowProps) => {
  return <View {...props} style={[{ flexDirection: 'row' }]} />;
};

const HeaderCell = (props: HeaderCellProps) => {
  return <View {...props} style={[{ flex: 1 }]} />;
};

const Body = (props: BodyProps) => {
  return <View {...props} />;
};

const Row = (props: RowProps) => {
  return <View {...props} style={[{ flexDirection: 'row' }]} />;
};

const Cell = (props: CellProps) => {
  return <View {...props} style={[{ flex: 1 }]} />;
};

const Footer = (props: FooterProps) => {
  return <View {...props} />;
};

const FooterRow = (props: RowProps) => {
  return <View {...props} style={[{ flexDirection: 'row' }]} />;
};

const FooterCell = (props: HeaderCellProps) => {
  return <View {...props} style={[{ flex: 1 }]} />;
};

export { Root, Header, HeaderRow, HeaderCell, Body, Row, Cell, Footer, FooterRow, FooterCell };
