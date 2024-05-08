const getTranslationKeys = (t, namespace) =>
  Object.keys(t?.raw(namespace) || []);

export default getTranslationKeys;
