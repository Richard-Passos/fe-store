'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui/';

const Home = () => {
  const [range, setRange] = useState({});

  return (
    <main className='my-24 flex min-h-screen flex-col items-center justify-center gap-12 px-48'>
      <Calendar
        mode='range'
        onSelect={setRange}
        selected={range}
      />
    </main>
  );
};
export default Home;
