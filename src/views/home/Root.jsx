'use client';

import { useEffect, useState } from 'react';

import { Progress } from '@/components/ui';
import variantsColor from '@/components/ui/variantsColor';

const getKeys = (obj) => Object.keys(obj);

const progressVariants = [
  ...getKeys(variantsColor).map((key) => ({ color: key, size: 'sm' })),
  ...getKeys(variantsColor).map((key) => ({ color: key, size: 'md' })),
  ...getKeys(variantsColor).map((key) => ({ color: key, size: 'lg' })),
];

export default function ProgressDemo() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
      <div className='w-full max-w-lg space-y-6'>
        {progressVariants.map((variants, i) => (
          <Progress
            key={`Home progress ${i}`}
            value={progress}
            variants={variants}
          >
            <Progress.Indicator />
          </Progress>
        ))}
      </div>
    </main>
  );
}
