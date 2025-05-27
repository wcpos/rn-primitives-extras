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
import { View } from '@rn-primitives/core';

function Root({ style, native: _native, web, ...props }: RootProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <RootWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <RootWeb {...props} {...(web as any)} />;
}

function Header({ style, native: _native, web, ...props }: HeaderProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <HeaderWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <HeaderWeb {...props} {...(web as any)} />;
}

function HeaderRow({ style, native: _native, web, ...props }: RowProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <HeaderRowWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <HeaderRowWeb {...props} {...(web as any)} />;
}

function HeaderCell({ style, native: _native, web, ...props }: HeaderCellProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <HeaderCellWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <HeaderCellWeb {...props} {...(web as any)} />;
}

function Body({ style, native: _native, web, ...props }: BodyProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <BodyWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <BodyWeb {...props} {...(web as any)} />;
}

function Row({ style, native: _native, web, ...props }: RowProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <RowWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <RowWeb {...props} {...(web as any)} />;
}

function Cell({ style, native: _native, web, ...props }: CellProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <CellWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <CellWeb {...props} {...(web as any)} />;
}

function Footer({ style, native: _native, web, ...props }: FooterProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <FooterWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <FooterWeb {...props} {...(web as any)} />;
}

function FooterRow({ style, native: _native, web, ...props }: RowProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <FooterRowWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <FooterRowWeb {...props} {...(web as any)} />;
}

function FooterCell({ style, native: _native, web, ...props }: HeaderCellProps) {
  if (style) {
    return (
      <View style={style} asChild>
        <FooterCellWeb {...props} {...(web as any)} />
      </View>
    );
  }
  return <FooterCellWeb {...props} {...(web as any)} />;
}

export { Body, Cell, Footer, FooterCell, FooterRow, Header, HeaderCell, HeaderRow, Root, Row };
