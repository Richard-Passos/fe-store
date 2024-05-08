import { Cross2Icon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

import { Button, Input, Text } from '@/components/atoms';
import { Form, Popover } from '@/components/molecules';
import { cn } from '@/utils';

import ClientForm from './ClientForm';

const PopoverDemo = (props) => {
  return (
    <Popover.Root {...props}>
      <Popover.Trigger asChild>
        <Button>Open popover</Button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content asChild>
          <ClientForm className='space-y-2'>
            <header className='mb-5 space-y-2'>
              <Text.Subtitle className='text-base leading-none'>
                Dimensions
              </Text.Subtitle>

              <Text.Root className='text-sm text-content/75'>
                Set the dimensions for the layer.
              </Text.Root>
            </header>

            <FormField name='width'>
              <Form.Label>Width</Form.Label>

              <Form.Control>
                <FormInput
                  defaultValue='100%'
                  placeholder='100%'
                />
              </Form.Control>

              <Form.Description>Layer width.</Form.Description>
            </FormField>

            <FormField name='maxWidth'>
              <Form.Label>Max. width</Form.Label>

              <Form.Control>
                <FormInput
                  defaultValue='300px'
                  placeholder='300px'
                />
              </Form.Control>

              <Form.Description>Layer max width.</Form.Description>
            </FormField>

            <FormField name='height'>
              <Form.Label>Height</Form.Label>

              <Form.Control>
                <FormInput
                  defaultValue='25px'
                  placeholder='25px'
                />
              </Form.Control>

              <Form.Description>Layer height.</Form.Description>
            </FormField>

            <FormField name='maxHeight'>
              <Form.Label>Max. height</Form.Label>

              <Form.Control>
                <FormInput
                  defaultValue='none'
                  placeholder='none'
                />
              </Form.Control>

              <Form.Description>Layer max height.</Form.Description>
            </FormField>

            <section
              aria-label='Actions'
              className='flex items-center justify-end pt-3'
            >
              <Form.Submit asChild>
                <Button variants={{ size: 'sm' }}>Apply</Button>
              </Form.Submit>

              <Popover.Close>
                <Cross2Icon />
              </Popover.Close>
            </section>
          </ClientForm>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

const FormField = ({ className, ...props }) => {
  return (
    <Form.Field
      className={cn(
        'grid grid-cols-3 items-center gap-x-4 space-y-0',
        className
      )}
      {...props}
    />
  );
};

const FormInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <Input
      className={cn('col-span-2 h-8', className)}
      ref={ref}
      {...props}
    />
  );
});
FormInput.displayName = 'FormInput';

export default PopoverDemo;
