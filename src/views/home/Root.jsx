import { X } from 'lucide-react';

import { Button, Dialog, Input, Label, Popover } from '@/components/ui';

const Home = () => {
  return (
    <main className='mt-48 flex w-full flex-col items-center gap-48'>
      <Popover>
        <Popover.Trigger asChild>
          <Button variants={{ variant: 'outline' }}>Open popover</Button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content className='grid gap-5'>
            <header className='space-y-2'>
              <h4 className='font-medium leading-none'>Dimensions</h4>

              <p className='text-sm text-muted-content'>
                Set the dimensions for the layer.
              </p>
            </header>

            <div className='grid gap-2'>
              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='width'>Width</Label>

                <Input
                  className='col-span-2 h-8'
                  id='width'
                  placeholder='100%'
                />
              </div>

              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='maxWidth'>Max. width</Label>

                <Input
                  className='col-span-2 h-8'
                  id='maxWidth'
                  placeholder='300px'
                />
              </div>

              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='height'>Height</Label>

                <Input
                  className='col-span-2 h-8'
                  id='height'
                  placeholder='25px'
                />
              </div>

              <div className='grid grid-cols-3 items-center gap-4'>
                <Label htmlFor='maxHeight'>Max. height</Label>

                <Input
                  className='col-span-2 h-8'
                  id='maxHeight'
                  placeholder='none'
                />
              </div>
            </div>

            <Popover.Close>
              <X />
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover>

      <Dialog>
        <Dialog.Trigger asChild>
          <Button variants={{ variant: 'outline' }}>Edit Profile</Button>
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
                <Label
                  className=''
                  htmlFor='name'
                >
                  Name
                </Label>

                <Input
                  className='col-span-3'
                  defaultValue='Pedro Duarte'
                  id='name'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label
                  className=''
                  htmlFor='username'
                >
                  Username
                </Label>

                <Input
                  className='col-span-3'
                  defaultValue='@peduarte'
                  id='username'
                />
              </div>
            </div>

            <Dialog.Actions>
              <Button type='submit'>Save changes</Button>
            </Dialog.Actions>

            <Dialog.Close>
              <X />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </main>
  );
};

export default Home;
