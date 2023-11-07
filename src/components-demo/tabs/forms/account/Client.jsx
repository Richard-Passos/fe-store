'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form, FormProvider } from '@/components/ui/form';
import { capitalize } from '@/utils';

const tabsDemoAccountClientFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  username: z.string().min(2, 'Username must be at least 2 characters.'),
});

const TabsDemoAccountClientForm = (props) => {
  const form = useForm({
    resolver: zodResolver(tabsDemoAccountClientFormSchema),
    defaultValues: {
      name: '',
      username: '',
    },
  });

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...form}>
      <Form
        onSubmit={tabsDemoAccountClientFormOnSubmit}
        {...props}
      />
    </FormProvider>
  );
};

const tabsDemoAccountClientFormOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default TabsDemoAccountClientForm;
