import { createTailwindMerge, getDefaultConfig } from 'tailwind-merge';

const customTailwindMergeConfig = createTailwindMerge(
  getDefaultConfig,
  (config) => ({
    ...config,
    classGroups: {
      ...config.classGroups,
      'font-size': [
        {
          text: [
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            '2xl',
            '3xl',
            '4xl',
            '5xl',
            '6xl',
            '7xl',
            '8xl',
            '9xl',
          ],
        },
      ],
    },
  }),
);

export default customTailwindMergeConfig;
