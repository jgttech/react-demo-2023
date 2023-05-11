import type { MotionProps } from 'framer-motion';

export type AnimationProps = {
  initial?: MotionProps['initial'];
  animate?: MotionProps['animate'];
  exit?: MotionProps['exit'];
  variants?: MotionProps['variants'];
};

export type AnimationPropsRecord = {
  [key: string]: AnimationProps;
};
