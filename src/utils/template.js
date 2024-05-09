import normCompName from './normCompName';

const template = (str, templates) =>
  str?.split('.').reduce((obj, key) => obj?.[normCompName(key)], templates);

export default template;
