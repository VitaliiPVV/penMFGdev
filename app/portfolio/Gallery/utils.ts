import { BREAKPOINTS, ITEMS_PER_CHUNK } from "./constants";

export const getInitialPageSize = (): number => {
  if (typeof window === 'undefined') return ITEMS_PER_CHUNK.DESKTOP;

  const width = window.innerWidth;

  if (width >= BREAKPOINTS.DESKTOP) {
    return ITEMS_PER_CHUNK.DESKTOP;
  } else if (width >= BREAKPOINTS.TABLET) {
    return ITEMS_PER_CHUNK.TABLET;
  } else {
    return ITEMS_PER_CHUNK.MOBILE;
  }
};

export const calculatePageSize = (width: number): number => {
  if (width >= BREAKPOINTS.DESKTOP) {
    return ITEMS_PER_CHUNK.DESKTOP;
  } else if (width >= BREAKPOINTS.TABLET) {
    return ITEMS_PER_CHUNK.TABLET;
  } else {
    return ITEMS_PER_CHUNK.MOBILE;
  }
};
