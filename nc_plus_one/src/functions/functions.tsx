export function formatDateTime(dateTime: string) {
  const formatDateTime = new Date(dateTime).toUTCString();
  return formatDateTime;
}
