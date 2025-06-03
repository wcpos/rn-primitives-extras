import * as React from 'react';
import type { BaseRootContext } from '../base-types';

const RootContext = React.createContext<BaseRootContext | null>(null);
function useRootContext() {
  const context = React.useContext(RootContext);
  if (!context) {
    throw new Error(
      'Combobox compound components cannot be rendered outside the Combobox component'
    );
  }
  return context;
}

type RootContextReturnType = ReturnType<typeof useRootContext>;

export { RootContext, useRootContext };

export type { RootContextReturnType };
