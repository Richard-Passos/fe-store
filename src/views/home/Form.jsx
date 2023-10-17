'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form } from '@/components/ui';

const formSchema = z.object({
  username: z.string().min(2),
  password: z.string().min(6),
});

const HomeForm = (props) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values) => console.log(values);

  return (
    <Form.Provider {...form}>
      <Form
        onSubmit={onSubmit}
        {...props}
      />
    </Form.Provider>
  );
};

export default HomeForm;
