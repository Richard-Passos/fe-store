import { Circle } from 'lucide-react';

import { Label, RadioGroup } from '@/components/ui';

export default function ProgressDemo() {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
      <RadioGroup defaultValue='comfortable'>
        <div className='flex items-center space-x-2'>
          <RadioGroup.Item
            id='r1'
            value='default'
          >
            <Circle className='fill-current' />
          </RadioGroup.Item>

          <Label htmlFor='r1'>Default</Label>
        </div>

        <div className='flex items-center space-x-2'>
          <RadioGroup.Item
            id='r2'
            value='comfortable'
          >
            <Circle className='fill-current' />
          </RadioGroup.Item>

          <Label htmlFor='r2'>Comfortable</Label>
        </div>

        <div className='flex items-center space-x-2'>
          <RadioGroup.Item
            id='r3'
            value='compact'
          >
            <Circle className='fill-current' />
          </RadioGroup.Item>

          <Label htmlFor='r3'>Compact</Label>
        </div>
      </RadioGroup>
    </main>
  );
}
