import { $ } from 'utils/classes';

const styles = {
  span: $`
    text-3xl
    font-bold
    underline
  `
};

export const App: FC = () => {
  return (
    <div>
      <span className={styles.span}>Hello world!</span>
      <div>
        <button type='button'>Click me!</button>
      </div>
    </div>
  );
};
