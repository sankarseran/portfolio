const loadScrollReveal = async (window: unknown) => {
  if (typeof window !== "undefined") {
    const ScrollReveal = (await import("scrollreveal")).default;
    return ScrollReveal();
  }
  return null;
};

export default loadScrollReveal;
