const dd = (num) => {
  return num > 9 ? num : `0` + num;
};

export const formatDuration = (timeInSeconds, withHours = false) => {
  if (timeInSeconds === null || timeInSeconds === undefined) {
    return null;
  }
  const h = Math.floor(timeInSeconds / 3600);
  const m = Math.floor(timeInSeconds / 60);
  const s = Math.round(timeInSeconds % 60);

  return (h > 0 || withHours)
    ? [h, dd(m), dd(s)].join(`:`)
    : [m, dd(s)].join(`:`);
};

export const getTogglerRelativePos = (event, progressBarRef) => {
  const progressBarBounds = progressBarRef.current.getBoundingClientRect();
  const progressBarWidth = progressBarBounds.right - progressBarBounds.left;
  const posX = event.clientX - progressBarBounds.left;
  let posXrelative = posX / progressBarWidth * 100;

  return Math.max(Math.min(posXrelative, 100), 0);
};

export const getTimestamp = (duration, posXrelative) => duration * posXrelative / 100;
