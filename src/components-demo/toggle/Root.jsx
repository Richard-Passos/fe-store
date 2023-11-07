'use client';

import { FontItalicIcon } from '@radix-ui/react-icons';

import { ListComponent } from '@/components';
import { Toggle } from '@/components/ui';
import { toggleSizes, toggleStyles } from '@/components/ui/toggle';

const TOGGLE_STYLE_VARIANTS = Object.keys(toggleStyles),
  TOGGLE_SIZE_VARIANTS = Object.keys(toggleSizes);

const TOGGLE_VARIANTS = TOGGLE_STYLE_VARIANTS.map((style) =>
  TOGGLE_SIZE_VARIANTS.map((size) => ({
    style,
    size,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.size.localeCompare(a.size));

const ToggleDemo = (props) => {
  return (
    <ListComponent {...props}>
      {TOGGLE_VARIANTS.map((variants) => (
        <ListComponent.Item
          className='max-w-xs'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Toggle
            aria-label='Toggle italic'
            variants={variants}
          >
            <FontItalicIcon />
          </Toggle>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

export default ToggleDemo;
