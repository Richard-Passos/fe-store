const regexs = {
  domain: /[a-z]*?:\/\/([a-z]\.)?(?=[a-z]*\.)(.*)\/.*/i,
  isValidTranslation: /^[a-z]+\./
};

export default regexs;
export const { domainRegex, isValidTranslationRegex } = Object.entries(
  regexs
).reduce((obj, [key, value]) => ({ ...obj, [key + 'Regex']: value }), {});
