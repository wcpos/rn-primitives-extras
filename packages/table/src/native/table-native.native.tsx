import { View } from '@rn-primitives/core/dist/native';
import type {
  RootProps,
  BodyProps,
  CellProps,
  FooterProps,
  HeaderCellProps,
  HeaderProps,
  RowProps,
} from './types';
import { ViewStyle } from 'react-native';

const Root = (props: RootProps) => {
  return <View {...props} />;
};

const Header = (props: HeaderProps) => {
  return <View {...props} />;
};

const HeaderRow = ({ style, ...props }: RowProps) => {
  return <View style={[{ flexDirection: 'row' }, style as ViewStyle]} {...props} />;
};

const HeaderCell = ({ style, ...props }: HeaderCellProps) => {
  return <View style={[{ flex: 1 }, style as ViewStyle]} {...props} />;
};

const Body = (props: BodyProps) => {
  return <View {...props} />;
};

const Row = ({ style, ...props }: RowProps) => {
  return <View style={[{ flexDirection: 'row' }, style as ViewStyle]} {...props} />;
};

const Cell = ({ style, ...props }: CellProps) => {
  return <View style={[{ flex: 1 }, style as ViewStyle]} {...props} />;
};

const Footer = (props: FooterProps) => {
  return <View {...props} />;
};

const FooterRow = ({ style, ...props }: RowProps) => {
  return <View style={[{ flexDirection: 'row' }, style as ViewStyle]} {...props} />;
};

const FooterCell = ({ style, ...props }: HeaderCellProps) => {
  return <View style={[{ flex: 1 }, style as ViewStyle]} {...props} />;
};

export { Root, Header, HeaderRow, HeaderCell, Body, Row, Cell, Footer, FooterRow, FooterCell };
