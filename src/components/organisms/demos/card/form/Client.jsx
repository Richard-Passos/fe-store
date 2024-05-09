'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FormRoot, FormProvider } from '@/components/molecules/form';
import { capitalize } from '@/utils';

const cardDemoClientFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  framework: z.string().min(2, 'Framework must be selected.'),
});

const CardDemoClientForm = (props) => {
  const form = useForm({
    resolver: zodResolver(cardDemoClientFormSchema),
    defaultValues: {
      name: '',
      framework: '',
    },
  });

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...form}>
      <FormRoot
        onSubmit={cardDemoClientFormOnSubmit}
        {...props}
      />
    </FormProvider>
  );
};

const cardDemoClientFormOnSubmit = (values) => {
  alert(
    Object.entries(values)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n'),
  );
};

export default CardDemoClientForm;
