/* eslint-disable react-hooks/exhaustive-deps */
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { forwardRef, createElement as createReactElement, useMemo } from 'react';
import { filterProps } from 'utils/filterProps';

type Tag = keyof Ref;
type CreateElementProps<P = {}> = P & MotionProps;
type RemainingProps<P = {}> = Omit<P, 'children' | 'className' | 'tw' | 'as'>;

/**
 * This accepts an array of exclusion props. The exclusions are,
 * generally, not needed. However, in the unusual event that specific props
 * are making is into the generated component nad/or DOM the exclusions can
 * be used to force specific properties to NOT get passed to the DOM element
 * created by React.
 */
export const createElement = <P extends {} = {}>(tag: Tag, exclusions: string[] = []) => {
  const Component = forwardRef<Ref[typeof tag], CreateElementProps<P>>((argv, ref) => {
    const { children, className, tw, as: render, ...args } = argv as BaseComponent;
    const component = render || tag;
    const props = filterProps<RemainingProps<CreateElementProps<P>>>(
      args as any,
      exclusions as any[]
    );
    const classes = useMemo(
      () =>
        [...(className || '').split(' '), ...(tw || '').split(' ')]
          .map(s => s.trim())
          .filter(Boolean)
          .sort((a, b) => (a < b ? -1 : b < a ? 1 : 0))
          .join(' '),
      [className, tw, render]
    );

    const properties = {
      ...props,
      ...(!classes
        ? {}
        : {
            className: classes,
          }),
      ref,
    };

    return createReactElement(component, properties, children);
  });

  Component.displayName = `forward_ref.html.${tag}`;

  const MotionComponent = motion<CreateElementProps<P>>(Component as any);
  MotionComponent.displayName = `motion.html.${tag}`;

  return MotionComponent;
};
