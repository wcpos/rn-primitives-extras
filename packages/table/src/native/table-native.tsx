import type {
  RootProps,
  HeaderProps,
  HeaderCellProps,
  BodyProps,
  RowProps,
  CellProps,
  FooterProps,
} from './types';

function Root(props: RootProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Root` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function Header(props: HeaderProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Header` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function HeaderRow(props: RowProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`HeaderRow` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function HeaderCell(props: HeaderCellProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`HeaderCell` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function Body(props: BodyProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Body` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function Row(props: RowProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Row` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function Cell(props: CellProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Cell` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function Footer(props: FooterProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`Footer` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function FooterRow(props: RowProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`FooterRow` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

function FooterCell(props: HeaderCellProps) {
  if (process.env.NODE_ENV === 'development') {
    console.log('`FooterCell` from @rn-primitives/table/native is only supported on native.');
  }
  return null;
}

export { Root, Header, HeaderRow, HeaderCell, Body, Row, Cell, Footer, FooterRow, FooterCell };
