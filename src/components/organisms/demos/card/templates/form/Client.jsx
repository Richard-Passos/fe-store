'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { FormProvider, FormRoot } from '@/components/molecules/form';
import { useToast } from '@/hooks';

const DemosCardOrganismTemplatesFormClient = ({
  okToast,
  configs,
  defaultValues,
  ...props
}) => {
  const schema = z.object(
    Object.entries(configs ?? {}).reduce(
      (obj, [key, value]) => ({
        ...obj,
        [key]: Object.entries(value ?? {}).reduce(
          (obj, [name, params]) => obj?.[name]?.(...params),
          z
        )
      }),
      {}
    )
  );

  const form = useForm({
      resolver: zodResolver(schema),
      defaultValues
    }),
    { toast } = useToast();

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <FormProvider {...form}>
      <FormRoot
        onSubmit={() => toast(okToast)}
        {...props}
      />
    </FormProvider>
  );
};

export default DemosCardOrganismTemplatesFormClient;
