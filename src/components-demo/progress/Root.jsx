'use client';

import { useEffect, useState } from 'react';

import { ListComponent } from '@/components';
import { Progress } from '@/components/ui';
import { progressSizes } from '@/components/ui/progress';
import variantColors from '@/components/ui/variantColors';

const PROGRESS_COLOR_VARIANTS = Object.keys(variantColors),
  PROGRESS_SIZE_VARIANTS = Object.keys(progressSizes);

const PROGRESS_VARIANTS = PROGRESS_COLOR_VARIANTS.map((color) =>
  PROGRESS_SIZE_VARIANTS.map((size) => ({
    color,
    size,
  })),
)
  .reduce((arr, variants) => [...arr, ...variants], [])
  .sort((a, b) => b.size.localeCompare(a.size));

const ProgressDemo = (props) => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(
      () => setProgress((value) => (value === 13 ? 66 : 13)),
      2500,
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <ListComponent {...props}>
      {PROGRESS_VARIANTS.map((variants) => (
        <ListComponent.Item
          className='max-w-sm'
          key={Object.entries(variants).join()}
        >
          <ListComponent.Subtitle variants={variants} />

          <Progress
            value={progress}
            variants={variants}
          >
            <Progress.Indicator />
          </Progress>
        </ListComponent.Item>
      ))}
    </ListComponent>
  );
};

export default ProgressDemo;
