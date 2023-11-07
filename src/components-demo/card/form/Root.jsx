'use client';

import { Button, Card, Form, Input } from '@/components/ui';
import { cn } from '@/utils';

import ClientForm from './Client';
import CardFormSelect from './Select';

const CardDemoForm = ({ className, ...props }) => {
  return (
    <Card
      asChild
      className={cn('w-full max-w-sm', className)}
      {...props}
    >
      <ClientForm className='space-y-4'>
        <Card.Header className='mb-6'>
          <Card.Title>Create project</Card.Title>

          <Card.Description>
            Deploy your new project in one-click.
          </Card.Description>
        </Card.Header>

        <Card.Content className='space-y-4'>
          <Form.Field name='name'>
            <Form.Label>Name</Form.Label>

            <Form.Control>
              <Input placeholder='Name of your project' />
            </Form.Control>

            <Form.Description>Name of your project.</Form.Description>

            <Form.Message />
          </Form.Field>

          <Form.Field name='framework'>
            <Form.Label>Framework</Form.Label>

            <CardFormSelect />

            <Form.Description>
              Select the framework used in your project.
            </Form.Description>

            <Form.Message />
          </Form.Field>
        </Card.Content>

        <Card.Actions>
          <Form.Reset
            asChild
            values={{ name: '', framework: '' }}
          >
            <Button variants={{ color: 'inverted', style: 'outline' }}>
              Cancel
            </Button>
          </Form.Reset>

          <Form.Submit asChild>
            <Button>Deploy</Button>
          </Form.Submit>
        </Card.Actions>
      </ClientForm>
    </Card>
  );
};

export default CardDemoForm;
