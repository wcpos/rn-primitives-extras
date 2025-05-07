import * as React from 'react';

function useIsomorphicLayoutEffect(
  effect: React.EffectCallback,
  dependencies?: React.DependencyList
) {
  React.useLayoutEffect(effect, dependencies);
}

export { useIsomorphicLayoutEffect };
