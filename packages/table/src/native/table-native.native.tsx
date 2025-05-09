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

const Root = ({ children, ...props }: RootProps) => {
  return <View {...props}>{children}</View>;
};

const Header = ({ children, ...props }: HeaderProps) => {
  return <View {...props}>{children}</View>;
};

const HeaderRow = ({ children, style, ...props }: RowProps) => {
  return (
    <View {...props} style={[{ flexDirection: 'row' }, style]}>
      {children}
    </View>
  );
};

const HeaderCell = ({ children, style, ...props }: HeaderCellProps) => {
  return (
    <View {...props} style={[{ flex: 1 }, style]}>
      <Text>{children}</Text>
    </View>
  );
};

const Body = ({ children, ...props }: BodyProps) => {
  return <View {...props}>{children}</View>;
};

const Row = ({ children, style, ...props }: RowProps) => {
  return (
    <View {...props} style={[{ flexDirection: 'row' }, style]}>
      {children}
    </View>
  );
};

const Cell = ({ children, style, ...props }: CellProps) => {
  return (
    <View {...props} style={[{ flex: 1 }, style]}>
      <Text>{children}</Text>
    </View>
  );
};

const Footer = ({ children, ...props }: FooterProps) => {
  return <View {...props}>{children}</View>;
};

const FooterRow = ({ children, ...props }: RowProps) => {
  return <View {...props}>{children}</View>;
};

const FooterCell = ({ children, style, ...props }: HeaderCellProps) => {
  return (
    <View {...props} style={[{ flex: 1 }, style]}>
      <Text>{children}</Text>
    </View>
  );
};

export { Root, Header, HeaderRow, HeaderCell, Body, Row, Cell, Footer, FooterRow, FooterCell };
