import { Link } from '@/components/atoms';

const richVariants = {
  b: (chunks) => <b className='font-semibold text-content'>{chunks}</b>,
  i: (chunks) => <i className='font-medium italic text-content'>{chunks}</i>,
  a: (chunks) => <Link className='text-content'>{chunks}</Link>,
  ul: (chunks) => (
    <ul className='my-sm list-disc space-y-1 pl-[5%]'>{chunks}</ul>
  ),
  ol: (chunks) => (
    <ol className='my-sm list-decimal space-y-1 pl-[5%]'>{chunks}</ol>
  ),
  li: (chunks) => <li>{chunks}</li>
};

export default richVariants;
