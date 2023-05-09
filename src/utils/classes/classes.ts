import { str } from 'utils/str';

const classes = (template: TemplateStringsArray, ...expressions: unknown[]): string => {
  const elements: string[] = [];

  template.forEach((segment, idx) => {
    let value = expressions[idx];

    if (value && typeof value === 'function') {
      value = value();
    }

    elements.push(segment);

    if (value != null) {
      elements.push(`${value}`);
    }
  });

  return str
    .dedup(
      elements
        .join(' ')
        .split(' ')
        .map(s => s.trim())
        .filter(Boolean),
    )
    .sort((a, b) => (a < b ? -1 : b < a ? 1 : 0))
    .join(' ');
};

const $ = classes;

export { classes, $ };
