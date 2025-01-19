export const stateRevenue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Others: 19849.53,
};

export function analyzeRevenue(revenue) {
  const validRevenue = revenue.filter((value) => value > 0);

  return {
    lowestRevenue: Math.min(...validRevenue),
    highestRevenue: Math.max(...validRevenue),
    averageRevenue: validRevenue.reduce((acc, val) => acc + val, 0) / validRevenue.length,
    daysAboveAverage: validRevenue.filter(
      (value) => value > validRevenue.reduce((acc, val) => acc + val, 0) / validRevenue.length,
    ).length,
  };
}
