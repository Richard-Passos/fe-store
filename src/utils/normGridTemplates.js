const normGridTemplates = (templates) =>
  Object.entries(templates ?? {})?.reduce(
    (obj, [key, val]) => ({
      ...obj,
      [`--${key.toLowerCase()}-template`]: val
    }),
    {}
  );

export default normGridTemplates;
