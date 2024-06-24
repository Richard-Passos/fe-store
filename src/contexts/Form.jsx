'use client';

import { createFormContext } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';

import { normKey, objToArray } from '@/utils';

const [MantineFormProvider, useFormContext, useForm] = createFormContext();

const FormProvider = ({ fields = {}, value, ...props }) => {
  fields = objToArray(fields);

  const schema = SCHEMA_TYPES.object(fields);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: reduceFields(fields, getDefaultValue),
    validate: zodResolver(schema)
  });

  return (
    <MantineFormProvider
      form={form}
      {...props}
    />
  );
};

const reduceFields = (fields, cb) =>
  fields.reduce((obj, data = {}) => {
    const isNested = !!data.fields;

    return {
      ...obj,
      [data.id]: cb(data, isNested)
    };
  }, {});

const getDefaultValue = (data, isNested) => {
  if (isNested) {
    const fields = Object.values(data.fields);

    return fields.map((nestedFields) => {
      nestedFields = objToArray(nestedFields);

      return reduceFields(nestedFields, getDefaultValue);
    });
  }

  return data.defaultValue;
};

const getSchema = (data, isNested) => {
  if (isNested) {
    const fields = Object.values(data.fields);

    return SCHEMA_TYPES[normKey(data.type)]?.(fields);
  }

  const schema = objToArray(data.schema);

  return schema.reduce(
    (z, data = {}) => z[data.id]?.(data.value, data.message),
    z
  );
};

const SCHEMA_TYPES = {
  array: (fields) =>
    z.array(
      ...fields.map((nestedFields) => {
        nestedFields = objToArray(nestedFields);

        return z.object(reduceFields(nestedFields, getSchema));
      })
    ),
  object: (fields) => z.object(reduceFields(fields, getSchema))
};

export { FormProvider, useFormContext };
