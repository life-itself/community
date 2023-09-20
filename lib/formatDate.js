export function formatDate(dateUTC) {
  return new Date(dateUTC).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
