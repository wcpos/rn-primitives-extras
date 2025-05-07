import { View } from '@rn-primitives/core';
import { VirtualizedList as VirtualizedListWeb } from '../web';
import type { VirtualizedListHandle, VirtualizedListProps } from './types';

function VirtualizedList<T>({
  ref,
  native: _native,
  style,
  web,
  ...props
}: VirtualizedListProps<T>) {
  if (style) {
    return (
      <View style={style} asChild>
        <VirtualizedListWeb
          ref={ref as unknown as React.Ref<VirtualizedListHandle>}
          {...props}
          {...web}
        />
      </View>
    );
  }
  return (
    <VirtualizedListWeb
      ref={ref as unknown as React.Ref<VirtualizedListHandle>}
      {...props}
      {...web}
    />
  );
}

export { VirtualizedList };
