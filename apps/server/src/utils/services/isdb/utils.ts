/**
 * a util for convert milles to seconds
 * @param date
 * @return date in second format
 */
export const millesToSeconds = (date: number) => Math.round(date / 1000);
export const calculatePeriodTime = (
  prePeriod: number,
  factor: number,
  maxPeriod: number
) => (prePeriod * factor <= maxPeriod ? prePeriod * factor : maxPeriod);
