'use client';

import { createContext, useState } from 'react';

const CarouselContext = createContext({
  state: { activeIdx: 0, progress: 0 },
  setState: () => {}
});

const CarouselProvider = ({ value, ...props }) => {
  const [state, setState] = useState({ activeIdx: 0, progress: 0 });

  return (
    <CarouselContext.Provider
      value={{ state, setState, ...value }}
      {...props}
    />
  );
};

export default CarouselContext;
export { CarouselProvider };
