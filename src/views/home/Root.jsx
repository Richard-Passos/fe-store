import { ScrollArea } from '@/components/ui';

const TAGS = [...Array(50)].map((_, i, arr) => `v1.2.0-beta.${arr.length - i}`);

export default function ProgressDemo() {
  return (
    <main className='max-w-bounds flex min-h-screen w-full items-center justify-center'>
      <ScrollArea className='h-72 w-36 border'>
        <ScrollArea.Viewport>
          <div className='w-36 px-4 py-5'>
            <div>Tags</div>

            {TAGS.map((tag) => (
              <div
                className='Tag'
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>

          <div className='flex px-4 py-5'>
            <div>Tags</div>

            {TAGS.map((tag) => (
              <div
                className='Tag'
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar orientation='horizontal'>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar>

        <ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea>
    </main>
  );
}
