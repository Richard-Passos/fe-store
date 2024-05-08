import {
  ChatBubbleIcon,
  ChevronRightIcon,
  CookieIcon,
  EnvelopeClosedIcon,
  ExitIcon,
  GearIcon,
  GitHubLogoIcon,
  InfoCircledIcon,
  KeyboardIcon,
  Link2Icon,
  LockClosedIcon,
  PersonIcon,
  PlusCircledIcon,
  PlusIcon,
  Share1Icon,
} from '@radix-ui/react-icons';

import { Button } from '@/components/atoms';
import { DropdownMenu } from '@/components/molecules';

const DropdownMenuDemo = (props) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        <Button>Open</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='w-56'>
          <DropdownMenu.Label>My Account</DropdownMenu.Label>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <DropdownMenu.Icon>
                <PersonIcon />
              </DropdownMenu.Icon>

              <span>Profile</span>

              <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <DropdownMenu.Icon>
                <LockClosedIcon />
              </DropdownMenu.Icon>

              <span>Security</span>

              <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <DropdownMenu.Icon>
                <GearIcon />
              </DropdownMenu.Icon>

              <span>Config</span>

              <DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
            </DropdownMenu.Item>

            <DropdownMenu.Item>
              <DropdownMenu.Icon>
                <KeyboardIcon />
              </DropdownMenu.Icon>

              <span>Keyboard shortcuts</span>

              <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Group>
            <DropdownMenu.Item>
              <DropdownMenu.Icon>
                <Share1Icon />
              </DropdownMenu.Icon>

              <span>Team</span>
            </DropdownMenu.Item>

            <DropdownMenu.Sub.Root>
              <DropdownMenu.Sub.Trigger>
                <DropdownMenu.Icon>
                  <Link2Icon />
                </DropdownMenu.Icon>

                <span>Invite users</span>

                <DropdownMenu.Icon className='ml-auto'>
                  <ChevronRightIcon />
                </DropdownMenu.Icon>
              </DropdownMenu.Sub.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Sub.Content className='w-36'>
                  <DropdownMenu.Item>
                    <DropdownMenu.Icon>
                      <EnvelopeClosedIcon />
                    </DropdownMenu.Icon>

                    <span>Email</span>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <DropdownMenu.Icon>
                      <ChatBubbleIcon />
                    </DropdownMenu.Icon>

                    <span>Message</span>
                  </DropdownMenu.Item>

                  <DropdownMenu.Separator />

                  <DropdownMenu.Item>
                    <DropdownMenu.Icon>
                      <PlusCircledIcon />
                    </DropdownMenu.Icon>

                    <span>More...</span>
                  </DropdownMenu.Item>
                </DropdownMenu.Sub.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub.Root>

            <DropdownMenu.Item>
              <DropdownMenu.Icon>
                <PlusIcon />
              </DropdownMenu.Icon>

              <span>New Team</span>

              <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>

          <DropdownMenu.Separator />

          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <GitHubLogoIcon />
            </DropdownMenu.Icon>

            <span>GitHub</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <InfoCircledIcon />
            </DropdownMenu.Icon>

            <span>Support</span>
          </DropdownMenu.Item>

          <DropdownMenu.Item disabled>
            <CookieIcon />

            <span>Cookies</span>
          </DropdownMenu.Item>

          <DropdownMenu.Separator />

          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <ExitIcon />
            </DropdownMenu.Icon>

            <span>Log out</span>

            <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
