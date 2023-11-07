'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form, FormProvider } from '@/components/ui/form';
import { capitalize } from '@/utils';

const formDemoClientSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email(),
});

const FormDemoClient = (props) => {
  const form = useForm({
    resolver: zodResolver(formDemoClientSchema),
    defaultValues: {
      name: '',
      email: '',
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
        onSubmit={formDemoClientOnSubmit}
        {...props}
      />
    </FormProvider>
  );
};

const formDemoClientOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default FormDemoClient;
