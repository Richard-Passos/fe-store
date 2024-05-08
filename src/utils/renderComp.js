const renderComp = (Comp, booleans) => !booleans?.some((bool) => !bool) && Comp;

export default renderComp;
