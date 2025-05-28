import * as React from 'react';
import { composeRefs } from '@radix-ui/react-compose-refs';

type Props = {
  /** If true, slot into the single child wrapper; otherwise render `slotRenderer` directly */
  asChild?: boolean;
  /** A single React element whose props include a `children` slot */
  //   children: React.ReactElement;
  /** Props to merge onto the wrapper (minus its own children) */
  injectedProps?: {
    /** you want to be able to inject style (web) or other props */
    style?: any;
    /** preserve whatever ref the caller passed */
    ref?: React.ForwardedRef<any>;
    /** plus anything else they want… */
    [key: string]: any;
  };
  /** Render function that receives the inner children to slot into */
  slotRenderer: (inner: React.ReactNode) => React.ReactNode;
};

/**
 * If `asChild` and `children` is a valid ReactElement, clone it,
 * merge injectedProps (e.g. style/ref) and slotRenderer its children.
 * Otherwise just call slotRenderer on children.
 */
export function SlottableWithNestedChildren({
  asChild,
  children,
  injectedProps,
  slotRenderer,
}: React.PropsWithChildren<Props>) {
  // only if asChild and a single React Element
  if (asChild && React.isValidElement(children)) {
    // force-it into a single element
    const wrapper = React.Children.only(children) as React.ReactElement<any>;
    const inner = wrapper.props.children;

    // pull off the wrapper’s own children & ref
    const { children: _omitChildren, ref: origRef, style: origStyle, ...restProps } = wrapper.props;

    // merge styles shallowly
    const mergedStyle = {
      ...(origStyle ?? {}),
      ...(injectedProps?.style ?? {}),
    };

    // build the new props object
    const mergedProps = {
      ...restProps,
      ...injectedProps,
      style: mergedStyle,
      ref: composeRefs(origRef, injectedProps?.ref),
    };

    return React.cloneElement(wrapper, mergedProps, slotRenderer(inner));
  }

  // fallback: just render your virtualized list normally
  return <>{slotRenderer(children)}</>;
}
