'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FormRoot, FormProvider } from '@/components/molecules/form';
import { capitalize } from '@/utils';

const sheetDemoClientFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  username: z.string().min(2, 'Username must be at least 2 characters.'),
});

const SheetDemoClientForm = (props, ref) => {
  const form = useForm({
    resolver: zodResolver(sheetDemoClientFormSchema),
    defaultValues: {
      name: 'John Doe',
      username: '@jdoe',
    },
  });

  return (
    <FormProvider {...form}>
      <FormRoot
        onSubmit={sheetDemoClientFormOnSubmit}
        ref={ref}
        {...props}
      />
    </FormProvider>
  );
};

const sheetDemoClientFormOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default forwardRef(SheetDemoClientForm);
