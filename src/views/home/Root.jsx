import { ScrollArea } from '@/components/ui';

const TAGS = [...Array(50)].map((_, i, arr) => `v1.2.0-beta.${arr.length - i}`);

export default function ProgressDemo() {
  return (
    <main className='flex min-h-screen w-full max-w-bounds items-center justify-center'>
      <ScrollArea className='h-36 w-72 border'>
        <ScrollArea.Viewport>
          <div className='px-4 py-5'>
            <div className='flex'>
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
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar orientation='horizontal'>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar>

        <ScrollArea.Scrollbar>
          <ScrollArea.Scrollbar.Thumb />
        </ScrollArea.Scrollbar>

        <ScrollArea.Corner />
      </ScrollArea>
    </main>
  );
}
