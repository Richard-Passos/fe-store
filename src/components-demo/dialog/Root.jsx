import { Cross2Icon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

import { Button, Input } from '@/components/atoms';
import { Dialog, Form } from '@/components/molecules';
import { cn } from '@/utils';

import ClientForm from './ClientForm';

const DialogDemo = (props) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Trigger asChild>
        <Button>Edit Profile</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content asChild>
          <ClientForm>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>

              <Dialog.Description>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Dialog.Description>
            </Dialog.Header>

            <section
              aria-label='Content'
              className='space-y-4'
            >
              <FormField name='name'>
                <FormLabel>Name</FormLabel>

                <Form.Control>
                  <FormInput placeholder='John Doe' />
                </Form.Control>

                <Form.Description>
                  Your name, people will see it.
                </Form.Description>

                <FormMessage />
              </FormField>

              <FormField name='username'>
                <FormLabel>Username</FormLabel>

                <Form.Control>
                  <FormInput placeholder='@jdoe' />
                </Form.Control>

                <Form.Description>
                  Your username, used to login.
                </Form.Description>

                <FormMessage />
              </FormField>
            </section>

            <Dialog.Actions>
              <Form.Submit asChild>
                <Button>Save changes</Button>
              </Form.Submit>

              <Dialog.Close>
                <Cross2Icon />
              </Dialog.Close>
            </Dialog.Actions>
          </ClientForm>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const FormField = ({ className, ...props }) => {
  return (
    <Form.Field
      className={cn(
        'grid grid-cols-4 items-center gap-y-2 space-y-0 sm:gap-x-4',
        className,
      )}
      {...props}
    />
  );
};

const FormLabel = ({ className, ...props }) => {
  return (
    <Form.Label
      className={cn('max-sm:col-span-full sm:text-right', className)}
      {...props}
    />
  );
};

const FormInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <Input
      className={cn('col-span-full sm:col-span-3', className)}
      ref={ref}
      {...props}
    />
  );
});
FormInput.displayName = 'FormInput';

const FormMessage = ({ className, ...props }) => {
  return (
    <Form.Message
      className={cn('col-span-full sm:col-start-2 sm:col-end-5', className)}
      {...props}
    />
  );
};

export default DialogDemo;
