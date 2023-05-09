type InferProps<C extends (...args: any) => any> = Parameters<C>[0];
