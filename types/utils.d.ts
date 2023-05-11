type InferProps<C extends (...args: any) => any> = Parameters<C>[0];
type BaseElement<T, P = {}> = Omit<T, 'ref' | 'children'> & BaseComponent & P;
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
  type Button = BaseElement<React.ButtonHTMLAttributes<HTMLButtonElement>>;
  type Div = BaseElement<React.HTMLAttributes<HTMLDivElement>>;
  type UnorderedList = BaseElement<React.HTMLAttributes<HTMLDivElement>>;
  type OrderedList = BaseElement<React.HTMLAttributes<HTMLDivElement>>;
  type ListItem = BaseElement<React.LiHTMLAttributes<HTMLLIElement>>;
  type Anchor = BaseElement<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  type Paragraph = BaseElement<React.HTMLAttributes<HTMLDivElement>>;
  type Input = BaseElement<React.InputHTMLAttributes<HTMLInputElement>>;
  type Checkbox = BaseElement<React.InputHTMLAttributes<HTMLInputElement>>;
  type Span = BaseElement<React.HTMLAttributes<HTMLSpanElement>>;
  type Label = BaseElement<React.HTMLAttributes<HTMLLabelElement>>;
}
