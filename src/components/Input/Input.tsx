import { $ } from 'utils/classes';

type InputProps = Html.Input;

const styles = {
  input: $`
    border
    rounded
    p-3
  `,
};

export const Input: FC<InputProps> = props => {
  return <input className={styles.input} {...props} />;
};
