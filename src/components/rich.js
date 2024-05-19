import { Link } from '@/components/atoms';

const rich = {
  b: (chunks) => <b className='font-medium text-content'>{chunks}</b>,
  i: (chunks) => <i className='font-medium italic text-content'>{chunks}</i>,
  a: (chunks) => <Link>{chunks}</Link>,
  ul: (chunks) => (
    <ul className='space-y-2xs my-sm list-disc pl-md'>{chunks}</ul>
  ),
  ol: (chunks) => (
    <ol className='space-y-2xs my-sm list-decimal pl-md'>{chunks}</ol>
  ),
  li: (chunks) => <li>{chunks}</li>
};

export default rich;
