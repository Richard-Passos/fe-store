import normCompName from './normCompName';

const getTemplate = (str, templates) =>
  str?.split('.').reduce((obj, key) => obj?.[normCompName(key)], templates);

export default getTemplate;
