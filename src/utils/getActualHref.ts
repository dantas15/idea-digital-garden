const getActualHref = (href?: string) => {
  if (!href) return "#";

  const isDev = process.env.NODE_ENV === "development";

  return isDev ? href : `/garden${href}`;
};

export default getActualHref;
