export function formatDuration(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}
