export const isTodayOrAfter = (dateStr?: string) => {
  if (!dateStr) {
    return false;
  }

  const date1 = new Date(dateStr).toISOString().slice(0, 10);
  const date2 = new Date().toISOString().slice(0, 10);
  return date2 <= date1;
};

export const isAfter = (dateStr?: string, dateToCompare?: string) => {
  if (!dateStr) {
    return false;
  }

  const date1 = new Date(dateStr).toISOString().slice(0, 10);
  const toCompare = dateToCompare ? new Date(dateToCompare) : new Date();
  const date2 = toCompare.toISOString().slice(0, 10);
  return date2 < date1;
};