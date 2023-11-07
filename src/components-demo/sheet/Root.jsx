'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { forwardRef } from 'react';

import { ListComponent } from '@/components';
import { Button, Form, Input, Sheet } from '@/components/ui';
import { sheetContentSides } from '@/components/ui/sheet/Content';
import { cn } from '@/utils';

import ClientForm from './ClientForm';

const SHEET_VARIANTS = Object.keys(sheetContentSides).map((side) => ({ side }));

const SheetDemo = ({ className, ...props }) => {
  return (
    <ListComponent {...props}>
      {SHEET_VARIANTS.map((variants) => (
        <ListComponent.Item key={Object.entries(variants).join()}>
          <ListComponent.Subtitle variants={variants} />

          <Sheet>
            <Sheet.Trigger asChild>
              <Button>Open</Button>
            </Sheet.Trigger>

            <Sheet.Portal>
              <Sheet.Overlay />

              <Sheet.Content
                asChild
                variants={variants}
              >
                <ClientForm>
                  <Sheet.Header>
                    <Sheet.Title>Edit profile</Sheet.Title>

                    <Sheet.Description>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </Sheet.Description>
                  </Sheet.Header>

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

                  <Sheet.Actions>
                    <Form.Submit asChild>
                      <Button className='max-sm:w-full'>Save changes</Button>
                    </Form.Submit>

                    <Sheet.Close>
                      <Cross2Icon />
                    </Sheet.Close>
                  </Sheet.Actions>
                </ClientForm>
              </Sheet.Content>
            </Sheet.Portal>
          </Sheet>
        </ListComponent.Item>
      ))}
    </ListComponent>
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

export default SheetDemo;
