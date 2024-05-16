const normId = (str) =>
  (str?.[0]?.toLowerCase() + str?.slice(1).replace(/([A-Z])/g, '-$1'))
    ?.replace?.(/[ _]/g, '-')
    .replace('--', '-')
    .toLowerCase();

export default normId;
