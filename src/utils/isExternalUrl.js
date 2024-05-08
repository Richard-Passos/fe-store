import { domainRegex } from '@/regexs';

const isExternalUrl = (url) =>
  url?.indexOf(':') > -1 &&
  process.env.NEXT_PUBLIC_BASE_URL?.replace(domainRegex, '$2') !==
    url?.replace(domainRegex, '$2');

export default isExternalUrl;
