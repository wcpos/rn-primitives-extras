import { View } from '@rn-primitives/core';
import { VirtualizedList as VirtualizedListWeb } from '../web';
import type { VirtualizedListProps } from './types';

function VirtualizedList<T>({ native: _native, style, web, ...props }: VirtualizedListProps<T>) {
  if (style) {
    return (
      <View style={style} asChild>
        <VirtualizedListWeb {...props} {...web} />
      </View>
    );
  }
  return <VirtualizedListWeb {...props} {...web} />;
}

export { VirtualizedList };
