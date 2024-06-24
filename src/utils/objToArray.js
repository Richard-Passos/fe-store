const objToArray = (obj) =>
  Object.entries(obj ?? {}).map(([id, data]) => ({ id, ...data }));

export default objToArray;
