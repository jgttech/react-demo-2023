/**
 * [About]
 * Generalized React types for ease of use and convenience.
 */
declare type FC<P = {}> = React.FC<P>;
declare type ReactNode = React.ReactNode;
declare type ReactHTML = React.ReactHTML;
declare type Children = ReactNode | ReactNode[];
declare type MutableRefObject<E> = React.MutableRefObject<E>;
declare type RefObject<T> = React.RefObject<T>;
