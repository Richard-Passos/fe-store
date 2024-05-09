const translationKeys = (t, namespace) => Object.keys(t?.raw(namespace) || []);

export default translationKeys;
