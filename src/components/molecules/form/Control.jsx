'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormContext } from '@/hooks/contexts';

const MoleculesFormControl = (
  { name, customRegister, registerType, ...props },
  ref
) => {
  const { key, getInputProps } = useFormContext();

  const { onChange, ...rest } = (customRegister ?? getInputProps)(name, {
    type: registerType
  });

  return (
    <Slot
      ref={ref}
      {...rest}
      {...props}
      key={key(name)}
      onChange={(value) => {
        onChange(value);

        props.onChange?.(value);
      }}
    />
  );
};

export default forwardRef(MoleculesFormControl);
