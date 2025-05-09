import {
  BodyProps,
  CellProps,
  FooterProps,
  HeaderCellProps,
  HeaderProps,
  RootProps,
  RowProps,
} from './types';

function Root({ children, ...props }: RootProps) {
  return <table {...props}>{children}</table>;
}

function Header({ children, ...props }: HeaderProps) {
  return <thead {...props}>{children}</thead>;
}

function HeaderRow({ children, ...props }: RowProps) {
  return <tr {...props}>{children}</tr>;
}

function HeaderCell({ children, ...props }: HeaderCellProps) {
  return <th {...props}>{children}</th>;
}

function Body({ children, ...props }: BodyProps) {
  return <tbody {...props}>{children}</tbody>;
}

function Row({ children, ...props }: RowProps) {
  return <tr {...props}>{children}</tr>;
}

function Cell({ children, ...props }: CellProps) {
  return <td {...props}>{children}</td>;
}

function Footer({ children, ...props }: FooterProps) {
  return <tfoot {...props}>{children}</tfoot>;
}

function FooterRow({ children, ...props }: RowProps) {
  return <tr {...props}>{children}</tr>;
}

function FooterCell({ children, ...props }: HeaderCellProps) {
  return <th {...props}>{children}</th>;
}

export { Body, Cell, Footer, FooterCell, FooterRow, Header, HeaderCell, HeaderRow, Root, Row };
