import { Button, Card, Form } from '@/components/ui';
import { TabsContent } from '@/components/ui/tabs';

import ClientForm from './Client';
import PasswordInput from './Input';

const TabsDemoPasswordForm = (props) => {
  return (
    <TabsContent
      value='password'
      {...props}
    >
      <Card asChild>
        <ClientForm className='space-y-4'>
          <Card.Header className='mb-6'>
            <Card.Title>Password</Card.Title>

            <Card.Description>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </Card.Description>
          </Card.Header>

          <Card.Content className='space-y-4'>
            <Form.Field name='currPassword'>
              <Form.Label>Current password</Form.Label>

              <Form.Control>
                <PasswordInput />
              </Form.Control>

              <Form.Description>
                Your current password, used to login.
              </Form.Description>

              <Form.Message />
            </Form.Field>

            <Form.Field name='newPassword'>
              <Form.Label>New password</Form.Label>

              <Form.Control>
                <PasswordInput />
              </Form.Control>

              <Form.Description>
                Your new password, will be used to login.
              </Form.Description>

              <Form.Message />
            </Form.Field>
          </Card.Content>

          <Card.Actions>
            <Form.Submit asChild>
              <Button>Save password</Button>
            </Form.Submit>
          </Card.Actions>
        </ClientForm>
      </Card>
    </TabsContent>
  );
};

export default TabsDemoPasswordForm;
