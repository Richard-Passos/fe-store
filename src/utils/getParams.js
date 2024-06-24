import normId from './normId';
import normKey from './normKey';

const getParams = (searchParams, defaults) => {
  const getParam = (name) =>
    searchParams.get(normId(name))?.toString() ?? defaults[normKey(name)];

  return getParam;
};

export default getParams;
