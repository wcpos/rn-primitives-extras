import type {
  RootProps,
  HeaderProps,
  HeaderCellProps,
  BodyProps,
  RowProps,
  CellProps,
  FooterProps,
} from './types';

const Root = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Root` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<RootProps>;

const Header = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Header` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<HeaderProps>;

const HeaderRow = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`HeaderRow` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<RowProps>;

const HeaderCell = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`HeaderCell` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<HeaderCellProps>;

const Body = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Body` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<BodyProps>;

const Row = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Row` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<RowProps>;

const Cell = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Cell` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<CellProps>;

const Footer = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Footer` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<FooterProps>;

const FooterRow = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`FooterRow` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<RowProps>;

const FooterCell = (() => {
  if (process.env.NODE_ENV === 'development') {
    console.log('`FooterCell` from @rn-primitives/table/web is only supported on web.');
  }
  return null;
}) as React.FC<HeaderCellProps>;

export { Root, Header, HeaderRow, HeaderCell, Body, Row, Cell, Footer, FooterRow, FooterCell };
