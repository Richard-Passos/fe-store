const variantsComb = (variants) => {
  const arr = variants?.length ? variants : Object.entries(variants ?? {});

  if (!arr?.length) return [{}];

  const res = [],
    [first, ...rest] = arr ?? [];

  const [key, value] = first ?? [],
    remaining = variantsComb(rest);

  value.forEach((val) =>
    remaining.forEach((smaller) => res.push({ [key]: val, ...smaller }))
  );

  return res;
};

export default variantsComb;
