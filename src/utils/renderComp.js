const renderComp = (Comp, bools) => !bools?.some((bool) => !bool) && Comp;

export default renderComp;
