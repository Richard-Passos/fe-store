'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';

import { NumberInput } from '@/components/atoms';
import { MinusIcon, PlusIcon } from '@/components/atoms/icon/icons';
import { cn } from '@/utils';

import Handler from './Handler';

const MoleculesQuantityInput = (
  {
    defaultValue = 1,
    className,
    min = 1,
    max,
    decrementProps = {},
    incrementProps = {},
    onChange,
    ...props
  },
  ref
) => {
  const handlersRef = useRef(null),
    [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue((value) => {
      value = value > min ? value : min;
      value = value < max ? value : max;

      onChange?.(value);

      return value;
    });
  }, [max, min, onChange]);

  return (
    <NumberInput
      allowDecimal={false}
      allowNegative={false}
      className={cn(
        '[&>div>div]:[--section-size:--input-section-size] [&>div>input]:w-[calc(var(--input-section-size)*3)] [&>div>input]:px-[--input-section-size] [&>div>input]:text-center [&>div]:w-fit [&>div]:[--input-section-size:--input-left-section-size]',
        className
      )}
      defaultValue={defaultValue}
      handlersRef={handlersRef}
      leftSection={
        <Handler
          disabled={value <= min}
          {...decrementProps}
          onClick={(ev) => {
            handlersRef.current?.decrement();

            decrementProps.onClick?.(ev, handlersRef);
          }}
        >
          <MinusIcon className='size-2/3' />
        </Handler>
      }
      max={max}
      min={min}
      onChange={(value) => {
        value = +value;

        setValue(value);

        onChange?.(value);
      }}
      ref={ref}
      rightSection={
        <Handler
          disabled={value >= max}
          {...incrementProps}
          onClick={(ev) => {
            handlersRef.current?.increment();

            incrementProps.onClick?.(handlersRef, ev);
          }}
        >
          <PlusIcon className='size-2/3' />
        </Handler>
      }
      value={value}
      {...props}
    />
  );
};

export default forwardRef(MoleculesQuantityInput);
