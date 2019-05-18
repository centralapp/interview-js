export const canPerformSearch = query => {
  return query.length >= 3 && String(query).trim() !== "";
};

export const getSearchQuery = e => {
  return String(e.target.value);
};
