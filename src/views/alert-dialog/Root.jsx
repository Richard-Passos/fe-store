import { AlertDialog, Button } from '@/components/ui';

const AlertDialogView = (props) => {
  return (
    <AlertDialog {...props}>
      <AlertDialog.Trigger asChild>
        <Button variants={{ variant: 'outline' }}>Show dialog</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay />

        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>

            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
          </AlertDialog.Header>

          <AlertDialog.Actions>
            <AlertDialog.Cancel asChild>
              <Button
                variants={{ color: 'inverted', variant: 'ghost', size: 'sm' }}
              >
                Cancel
              </Button>
            </AlertDialog.Cancel>

            <AlertDialog.Action asChild>
              <Button variants={{ color: 'danger', size: 'sm' }}>
                Continue
              </Button>
            </AlertDialog.Action>
          </AlertDialog.Actions>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
};

export default AlertDialogView;
