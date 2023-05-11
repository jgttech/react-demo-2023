import type { AnimationPropsRecord } from 'models/FramerMotion';
import { Box } from 'components/Box';
import { $ } from 'utils/classes';

type LayoutProps = {
  children?: Children;
};

const animations: AnimationPropsRecord = {
  container: {
    initial: 'hide',
    animate: 'show',
    exit: 'hide',
    variants: {
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      },
      hide: {
        opacity: 0,
        y: '5vh',
        transition: {
          duration: 1,
        },
      },
    },
  },
};

const styles = {
  box: $`
    flex
    relative
    w-[100vw]
    h-[100vh]
    overflow-hidden
    justify-center
    items-center
  `,
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box {...animations.container} tw={styles.box}>
      {children}
    </Box>
  );
};
