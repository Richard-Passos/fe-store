import { Link } from '@/components/atoms';

const rich = {
  b: (chunks) => <b className='font-medium text-content'>{chunks}</b>,
  i: (chunks) => <i className='font-medium italic text-content'>{chunks}</i>,
  a: (chunks) => <Link>{chunks}</Link>,
  ul: (chunks) => <ul className='my-sm list-disc space-y-1 pl-md'>{chunks}</ul>,
  ol: (chunks) => (
    <ol className='my-sm list-decimal space-y-1 pl-md'>{chunks}</ol>
  ),
  li: (chunks) => <li>{chunks}</li>
};

export default rich;
