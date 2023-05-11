type FilterReturn<P = {}> = Omit<P, (keyof P)[][number]>;

/**
 * Used to filter out properties that are not wanted from
 * an object. This is useful for making sure that properties
 * to NOT end up in the DOM.
 */
export const filterProps = <P = {}>(props: P, exclusions: (keyof P)[]): FilterReturn<P> => {
  const filtered: Record<any, any> = {};

  (Object.keys(props || {}) as (keyof P)[]).forEach(key => {
    if (!exclusions.includes(key) && props[key]) {
      filtered[key] = props[key];
    }
  });

  return filtered as FilterReturn<P>;
};
