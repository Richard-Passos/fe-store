'use client';

import { useEffect, useState } from 'react';

import { Progress } from '@/components/atoms';
import { progressSizes } from '@/components/atoms/progress';
import colorVariants from '@/components/colorVariants';
import { ListComponent } from '@/components/molecules';

const PROGRESS_COLORS = Object.keys(colorVariants),
  PROGRESS_SIZES = Object.keys(progressSizes);

const PROGRESS = PROGRESS_COLORS.map((color) =>
  PROGRESS_SIZES.map((size) => ({
    color,
    size
  }))
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.size.localeCompare(a.size));

const ProgressDemo = (props) => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(
      () => setProgress((value) => (value === 13 ? 66 : 13)),
      2500
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <ListComponent.Root {...props}>
      {PROGRESS.map((variants) => (
        <ListComponent.Item
          className='max-w-sm'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Progress.Root
            value={progress}
            variants={variants}
          >
            <Progress.Indicator />
          </Progress.Root>
        </ListComponent.Item>
      ))}
    </ListComponent.Root>
  );
};

export default ProgressDemo;
