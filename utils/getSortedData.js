export const getSortedData = (data, key, order) => {
  const sorted = [...data];
  if (order === 'asc') {
    return sorted.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  }
  return sorted.sort((a, b) => (a[key] > b[key] ? -1 : 1));
}