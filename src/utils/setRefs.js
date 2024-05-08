const setRefs = (refFromFowardRef, refFromUseRef) => {
  return (node) => {
    refFromFowardRef?.(node);

    refFromUseRef.current = node;
  };
};

export default setRefs;
