import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { join } from 'path';

// Don't Repeat Yourself.
// Builds an alias object from the an injected base path.
const alias = (config: Record<string, string>) => {
  const aliases = {};

  Object.entries(config).forEach(([k, v]) => {
    aliases[k] = join(__dirname, v);
  });

  return aliases;
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: alias({
      utils: 'src/utils',
      views: 'src/views',
      hooks: 'src/hooks',
      models: 'src/models',
      components: 'src/components',
    }),
  },
});
