import { useRef } from 'react';
import { $ } from 'utils/classes';

type ButtonProps = Html.Button & {
  children?: Children;
  tw?: string;
};

/**
 * Configuration for what the ripple effect needs in
 * order to work properly.
 */
type ButtonRippleConfig = {
  element: HTMLButtonElement;
  event: React.MouseEvent<HTMLButtonElement>;
};

const styles = {
  button: $`
    rounded
    transition
    ease-in-out
    duration-300
    outline-offset-2
    focus:outline
    focus:outline-2
    overflow-hidden
    relative
    leading-none
    justify-between
    border-2
    px-4
    py-3
    text-sm

    text-white
    border-blue-500
    hover:border-blue-hover
    bg-blue-500
    hover:bg-blue-hover
    focus:outline-blue-500/50
  `,
};

/**
 * After a lot of research, there was no really clear or simple
 * means of using TailwindCSS, by itself, to produce the ripple
 * effect. I had to create the appropriate CSS code and then
 * dynamically create an element on the Button that reflects the
 * ripple effect based on where the users pointer it. The default
 * position is the top left.
 */
const ripple = (config: ButtonRippleConfig) => {
  const { element, event } = config;
  const ripple = element.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;
  const circle = document.createElement('span');

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`;
  circle.classList.add('ripple');
  circle.classList.add('bg-blue-300');

  element.appendChild(circle);
};

export const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      ripple({
        element: buttonRef.current,
        event: e,
      });
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button className={styles.button} {...props} onClick={handleClick} ref={buttonRef}>
      {children}
    </button>
  );
};
