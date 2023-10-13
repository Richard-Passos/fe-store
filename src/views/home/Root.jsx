'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui/';

const Home = () => {
  const [range, setRange] = useState({});

  return (
    <main className='flex min-h-screen flex-col items-center justify-center'>
      <Calendar
        fromYear={2015}
        mode='range'
        onSelect={setRange}
        selected={range}
        toYear={2025}
      />
    </main>
  );
};
export default Home;
