import { Button, Dialog } from '@/components/ui';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <main
      className={cn(className)}
      {...props}
    >
      <Dialog>
        <Dialog.Trigger asChild>
          <Button
            variants={{
              color: 'base',
              variant: 'outline',
            }}
          >
            Edit Profile
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content className='sm:max-w-[425px]'>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Dialog.Description>
            </Dialog.Header>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <label
                  className='text-right'
                  htmlFor='name'
                >
                  Name
                </label>

                <input
                  className='col-span-3'
                  defaultValue='Pedro Duarte'
                  id='name'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <label
                  className='text-right'
                  htmlFor='username'
                >
                  Username
                </label>
                <input
                  className='col-span-3'
                  defaultValue='@peduarte'
                  id='username'
                />
              </div>
            </div>

            <Dialog.Footer>
              <Button type='submit'>Save changes</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </main>
  );
};

export default Root;
