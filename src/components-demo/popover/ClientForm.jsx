'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form, FormProvider } from '@/components/ui/form';
import { capitalize } from '@/utils';

const popoverDemoClientFormSchema = z.object({
  width: z.string(),
  maxWidth: z.string(),
  height: z.string(),
  maxHeight: z.string(),
});

const PopoverDemoClientForm = (props, ref) => {
  const form = useForm({
    resolver: zodResolver(popoverDemoClientFormSchema),
    defaultValues: {
      width: '100%',
      maxWidth: '300px',
      height: '25px',
      maxHeight: 'none',
    },
  });

  return (
    <FormProvider {...form}>
      <Form
        onSubmit={popoverDemoClientFormOnSubmit}
        ref={ref}
        {...props}
      />
    </FormProvider>
  );
};

const popoverDemoClientFormOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default forwardRef(PopoverDemoClientForm);
