import { Button, Input } from '@/components/atoms';
import { Card, Form } from '@/components/molecules';
import { TabsContent } from '@/components/molecules/tabs';

import ClientForm from './Client';

const TabsDemoAccountForm = (props) => {
  return (
    <TabsContent
      value='account'
      {...props}
    >
      <Card.Root asChild>
        <ClientForm className='space-y-4'>
          <Card.Header className='mb-6'>
            <Card.Title>Account</Card.Title>

            <Card.Description>
              Make changes to your account here. Click save when you&apos;re
              done.
            </Card.Description>
          </Card.Header>

          <Card.Content className='space-y-4'>
            <Form.Field name='name'>
              <Form.Label>Name</Form.Label>

              <Form.Control>
                <Input placeholder='John Doe' />
              </Form.Control>

              <Form.Description>
                Your name, people will see it.
              </Form.Description>

              <Form.Message />
            </Form.Field>

            <Form.Field name='username'>
              <Form.Label>Username</Form.Label>

              <Form.Control>
                <Input placeholder='@jdoe' />
              </Form.Control>

              <Form.Description>Your username, used to login.</Form.Description>

              <Form.Message />
            </Form.Field>
          </Card.Content>

          <Card.Actions>
            <Form.Submit asChild>
              <Button>Save changes</Button>
            </Form.Submit>
          </Card.Actions>
        </ClientForm>
      </Card.Root>
    </TabsContent>
  );
};

export default TabsDemoAccountForm;
