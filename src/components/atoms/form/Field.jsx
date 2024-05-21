import { forwardRef } from 'react';

import { FormFieldProvider } from '@/contexts';
import { useFormField } from '@/hooks';

const FormField = forwardRef((props, ref) => {
  const { error } = useFormField();

  return (
    <fieldset
      data-invalid={!!error}
      data-valid={!error}
      ref={ref}
      {...props}
    />
  );
});
FormField.displayName = 'FormField';

const FormFieldWithProvider = ({ name, value, ...props }, ref) => {
  return (
    <FormFieldProvider value={{ name, ...value }}>
      <FormField
        name={name}
        ref={ref}
        {...props}
      />
    </FormFieldProvider>
  );
};

export default forwardRef(FormFieldWithProvider);
