'use client';

import { FontItalicIcon } from '@radix-ui/react-icons';

import { ListComponent } from '@/components/molecules';
import { Toggle } from '@/components/atoms';
import { toggleSizes, toggleTypes } from '@/components/atoms/toggle';

const TOGGLE_TYPES = Object.keys(toggleTypes),
  TOGGLE_SIZES = Object.keys(toggleSizes);

const TOGGLE = TOGGLE_TYPES.map((type) =>
  TOGGLE_SIZES.map((size) => ({
    type,
    size,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.size.localeCompare(a.size));

const ToggleDemo = (props) => {
  return (
    <ListComponent.Root {...props}>
      {TOGGLE.map((variants) => (
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
    </ListComponent.Root>
  );
};

export default ToggleDemo;
