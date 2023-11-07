import { Button, Card, Form, Input } from '@/components/ui';

import ClientForm from './Client';

const FormDemo = (props) => {
  return (
    <Card
      asChild
      {...props}
    >
      <ClientForm className='space-y-4'>
        <Card.Header className='mb-6'>
          <Card.Title>Newsletter</Card.Title>

          <Card.Description>
            Subscribe to receive awesome news every week.
          </Card.Description>
        </Card.Header>

        <Card.Content className='space-y-4'>
          <Form.Field name='name'>
            <Form.Label>Name</Form.Label>

            <Form.Control>
              <Input placeholder='John Doe' />
            </Form.Control>

            <Form.Description>Your name.</Form.Description>

            <Form.Message />
          </Form.Field>

          <Form.Field name='email'>
            <Form.Label>Email</Form.Label>

            <Form.Control>
              <Input placeholder='johndoe@example.com' />
            </Form.Control>

            <Form.Description>Your personal email.</Form.Description>

            <Form.Message />
          </Form.Field>
        </Card.Content>

        <Card.Actions>
          <Form.Reset
            asChild
            values={{ name: '', email: '' }}
          >
            <Button variants={{ color: 'inverted', style: 'outline' }}>
              Cancel
            </Button>
          </Form.Reset>

          <Form.Submit asChild>
            <Button>Subscribe</Button>
          </Form.Submit>
        </Card.Actions>
      </ClientForm>
    </Card>
  );
};

export default FormDemo;
