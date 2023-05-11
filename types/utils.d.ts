type InferProps<C extends (...args: any) => any> = Parameters<C>[0];
type BaseComponent = {
  children?: Children;
  as?: keyof JSX.IntrinsicElements;
  tw?: string;
  className?: string;
};

/**
 * A standard configuration for what ref's are used and that exist.
 */
declare type Ref = {
  button: HTMLButtonElement;
  div: HTMLDivElement;
  ul: HTMLUListElement;
  ol: HTMLOListElement;
  li: HTMLLIElement;
  a: HTMLAnchorElement;
  p: HTMLParagraphElement;
  input: HTMLInputElement;
  checkbox: HTMLInputElement;
  span: HTMLSpanElement;
  label: HTMLLabelElement;
};

/**
 * A standard implemtation of types for HTML elements. There are several
 * ways to use built-in HTML element types, however, it turns out that some
 * of the types follow the React design and some do not. To create a standard
 * implementation for each HTML element type, I have decided to create a specific
 * tag element type here. All these HTML element tag types should be
 */
declare namespace Html {
  type Button = Rauster.Element<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  type Div = Rauster.Element<React.HTMLAttributes<HTMLDivElement>>;
  type UnorderedList = Rauster.Element<React.HTMLAttributes<HTMLDivElement>>;
  type OrderedList = Rauster.Element<React.HTMLAttributes<HTMLDivElement>>;
  type ListItem = Rauster.Element<React.LiHTMLAttributes<HTMLLIElement>>;
  type Anchor = Rauster.Element<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  type Paragraph = Rauster.Element<React.HTMLAttributes<HTMLDivElement>>;
  type Input = Rauster.Element<React.InputHTMLAttributes<HTMLInputElement>>;
  type Checkbox = Rauster.Element<React.InputHTMLAttributes<HTMLInputElement>>;
  type Span = Rauster.Element<React.HTMLAttributes<HTMLSpanElement>>;
  type Label = Rauster.Element<React.HTMLAttributes<HTMLLabelElement>>;
}
