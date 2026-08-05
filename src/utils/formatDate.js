const dateFormatter = new Intl.DateTimeFormat("pt-PT", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const shortDateFormatter = new Intl.DateTimeFormat("pt-PT", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

export function formatDate(date, options = {}) {
  if (!date) return "";
  const parsedDate = new Date(`${date}T00:00:00Z`);
  return (options.short ? shortDateFormatter : dateFormatter).format(parsedDate);
}
